import React, { useState } from "react";

import { useSelector } from "react-redux";
import RankingPreviousList from "./RankingPreviousList";

import "./Ranking.scss";

const RankingPrevious = () => {
  const [isActive, setIsActive] = useState(false);
  const [classSelect, setClassSelect] = useState("ranking__item week-ranking");
  const { listRanking, isLoadingListRanking } = useSelector(
    (state) => state.ranking
  );

  let formattedWeek = [];

  let [listOfRankingWeek, setListOfRankingWeek] = useState([]);

  function getDateFormattedByMonth(initialDate, finalDate) {
    let formattedWeek = "";
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Out",
      "Nov",
      "Dez",
    ];

    if (initialDate && finalDate) {
      //Workaround to fixing bug in Safari browser
      const initialDateReplaced = initialDate.replace("+0000", "");
      const finalDateReplaced = finalDate.replace("+0000", "");
      const initDate = new Date(initialDateReplaced);
      const finDate = new Date(finalDateReplaced);

      if (initDate.getMonth() === finDate.getMonth()) {
        formattedWeek = `${initDate.getDate()} a ${finDate.getDate()} de ${
          monthNames[initDate.getMonth()]
        }`;
      } else {
        formattedWeek = `${initDate.getDate()} de  ${
          monthNames[initDate.getMonth()]
        } a ${finDate.getDate()} de ${monthNames[finDate.getMonth()]}`;
      }
    }

    return formattedWeek;
  }

  function formatWeeks(items) {
    items.forEach((element) => {
      const today = new Date().getTime();

      const fromDateReplaced = element.startAt.replace("+0000", "");
      const toDateReplaced = element.endAt.replace("+0000", "");

      const from = new Date(fromDateReplaced).getTime();
      const to = new Date(toDateReplaced).getTime();

      if (!(today >= from && today <= to)) {
        element.formattedWeek = getDateFormattedByMonth(
          fromDateReplaced,
          toDateReplaced
        );
        formattedWeek.push(element);
      }
    });
  }

  if (listRanking.length > 0) {
    formatWeeks(listRanking);
  }

  function showRankingWeek() {
    const selectRanking = document.getElementById("selection-ranking");

    if (selectRanking.selectedIndex !== 0) {
      setListOfRankingWeek(listRanking[selectRanking.selectedIndex - 1]);
      setIsActive(true);
      setClassSelect(
        isActive
          ? "ranking__item week-ranking-active"
          : "ranking__item week-ranking"
      );
    }
  }

  function getRankingWeek() {
    setClassSelect(
      isActive
        ? "ranking__item week-ranking-active"
        : "ranking__item week-ranking"
    );
  }

  return (
    <section className="ranking forms__text--center">
      <div className="ranking__inner">
        <div className="ranking__content ranking__content--previous no-padding-ranking">
          <div className="dropmenu">
            <select
              onClick={(e) => {
                e.preventDefault();
                getRankingWeek();
              }}
              id="selection-ranking"
              onChange={showRankingWeek}
              className={classSelect}
            >
              <option id="firstOption" className="ranking__name ranking-week">
                {"Select Week"}
              </option>
              {formattedWeek.map((item) => (
                <option
                  className="ranking__name ranking-week"
                  id={item.id}
                  key={item.id}
                  value={item.id}
                >
                  {item.week + " week "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {item.formattedWeek}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {!isLoadingListRanking}{" "}
      {
        <RankingPreviousList
          ranking={listOfRankingWeek}
          hasShots={listOfRankingWeek.shots}
        />
      }
    </section>
  );
};

export default RankingPrevious;
