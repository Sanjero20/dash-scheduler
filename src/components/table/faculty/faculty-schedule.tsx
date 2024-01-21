/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SCHEDULES } from "@/constants/initial";

import ColumnName from "../rows/schedule-list/names";
import InputCol from "./input/input-col";
import InputSection from "./input/input-section";
import InputScheduleState from "./input/input-schedule-state";

import { getFormattedShedule } from "@/services/api/faculty";
import { useScheduleStore } from "@/stores/schedule";
import { ISchedule } from "@/types/api";
import useScheduleList from "@/hooks/useScheduleList";

interface RightValues {
  subject: string;
  section: string;
  initials: string;
}

function FacultySchedule() {
  const [state, dispatch, handleInputChange] = useScheduleList();
  const { getSchedules, setSchedules } = useScheduleStore();
  const [searchParams] = useSearchParams();
  const [uniqueOddValues, setUniqueOddValues] = useState<RightValues[]>();
  const [uniqueEvenValues, setUniqueEvenValues] = useState<RightValues[]>();

  // fetch data base on userId
  useEffect(() => {
    const userId = searchParams.get("userId");
    if (!userId) {
      setSchedules([]);
      return;
    }
    const fetchData = async () => {
      const data = await getFormattedShedule(parseInt(userId));
      dispatch({ type: "SET_ALL", value: data });
    };

    fetchData();
  }, [searchParams]);

  // copy state globally
  useEffect(() => {
    setSchedules(state);
    schedDetailsLazyAlgo(state);
  }, [state]);

  useEffect(() => {
    const schedules = getSchedules();
    dispatch({ type: "SET_ALL", value: schedules });
  }, [setSchedules]);

  const schedDetailsLazyAlgo = function (state: ISchedule[]) {
    // stackleague big-brain solution
    const formatted: RightValues[] = [];
    for (let i = 0; i < state.length; i++) {
      for (let j = 0; j < state[i].schedules.length; j++) {
        const schedule = state[i].schedules[j];
        if (schedule.course === "" || schedule.section === "") continue;

        formatted.push({
          section: schedule.section,
          subject: schedule.course,
          initials: schedule.initials,
        });
      }
    }

    // another big brain move ooohoohohohh~
    let unique: RightValues[] = [];
    for (let i = 0; i < formatted.length; i++) {
      if (
        !unique.find(
          (data) =>
            data.section === formatted[i].section &&
            data.subject === formatted[i].subject,
        )
      )
        unique.push(formatted[i]);
    }

    unique.sort((a: RightValues, b: RightValues) => {
      return a.section.localeCompare(b.section);
    });

    const uniqueOdd: RightValues[] = [];
    const uniqueEven: RightValues[] = [];

    for (let i = 0; i < unique.length; i++) {
      if (i % 2 === 0) uniqueEven.push(unique[i]);
      else uniqueOdd.push(unique[i]);
    }

    setUniqueEvenValues(uniqueEven);
    setUniqueOddValues(uniqueOdd);
  };

  return (
    <>
      {SCHEDULES.map((schedule, index) => {
        return (
          <Fragment key={index}>
            {/* template */}
            <tr className="h-8 text-center">
              <td rowSpan={2}>{schedule}</td>

              <InputCol
                stateIndex={index}
                state={state}
                handleInputChange={handleInputChange}
              />

              {index < 9 && (
                <>
                  <td>
                    {uniqueEvenValues && index < uniqueEvenValues.length
                      ? uniqueEvenValues[index].subject
                      : ""}
                  </td>
                  <td>
                    {uniqueEvenValues && index < uniqueEvenValues.length
                      ? uniqueEvenValues[index].section
                      : ""}
                  </td>
                  <td>
                    <InputScheduleState
                      course={
                        uniqueEvenValues && index < uniqueEvenValues.length
                          ? uniqueEvenValues[index].subject
                          : ""
                      }
                      initials={
                        uniqueEvenValues && index < uniqueEvenValues.length
                          ? uniqueEvenValues[index].initials
                          : ""
                      }
                      section={
                        uniqueEvenValues && index < uniqueEvenValues.length
                          ? uniqueEvenValues[index].section
                          : ""
                      }
                    />
                  </td>
                </>
              )}
            </tr>

            {/* sections */}
            <tr className="h-8 w-fit text-center">
              <InputSection
                stateIndex={index}
                state={state}
                handleInputChange={handleInputChange}
              />

              {index < 8 && (
                <>
                  <td>
                    {uniqueOddValues && index < uniqueOddValues.length
                      ? uniqueOddValues[index].subject
                      : ""}
                  </td>
                  <td>
                    {uniqueOddValues && index < uniqueOddValues.length
                      ? uniqueOddValues[index].section
                      : ""}
                  </td>
                  <td>
                    <InputScheduleState
                      course={
                        uniqueOddValues && index < uniqueOddValues.length
                          ? uniqueOddValues[index].subject
                          : ""
                      }
                      initials={
                        uniqueOddValues && index < uniqueOddValues.length
                          ? uniqueOddValues[index].initials
                          : ""
                      }
                      section={
                        uniqueOddValues && index < uniqueOddValues.length
                          ? uniqueOddValues[index].section
                          : ""
                      }
                    />
                  </td>
                </>
              )}

              {/* Columns for the names in the right side of the table */}
              {index == 8 && (
                <ColumnName rowSpan={4} name="" title="Faculty Assigned" />
              )}

              {index == 10 && (
                <ColumnName rowSpan={6} name="" title="Dean CEAFA" />
              )}

              {index == 13 && (
                <ColumnName
                  rowSpan={9}
                  name=""
                  title="Executive Director, Main II"
                />
              )}
            </tr>
          </Fragment>
        );
      })}
    </>
  );
}

export default FacultySchedule;
