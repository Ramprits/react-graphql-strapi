import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Activity from "../../components/activity";
import { GET_ACTIVITIES } from "../../graphql/activitiesGraphql";

const ActivityList = () => {
  const { data, loading, refetch } = useQuery(GET_ACTIVITIES, {
    fetchPolicy: "network-only"
  });
  return (
    <div className="container mt-3">
      {loading && <div className="">Please wait while loading</div>}
      {data && <Activity data={data} refetch={refetch} />}
    </div>
  );
};
export default ActivityList;
