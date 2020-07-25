import React from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";

const DELETE_ACTIVITY = gql`
  mutation DELETE_ACTIVITY($id: ID!) {
    deleteActivity(input: { where: { id: $id } }) {
      activity {
        id
      }
    }
  }
`;
const Activity = ({ data, refetch }) => {
  const history = useHistory();
  const [deleteActivity] = useMutation(DELETE_ACTIVITY, {
    onCompleted: () => refetch()
  });
  function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this activity!")) {
      deleteActivity({ variables: { id } });
    }
  }

  return (
    <table className="table is-bordered">
      <thead className="has-background-link">
        <tr>
          <th>
            <abbr title="#">#</abbr>
          </th>
          <th>
            <abbr title="Title">Title</abbr>
          </th>
          <th>
            <abbr title="Content">Content</abbr>
          </th>
          <th>
            <abbr title="CreatedDate">Created Date</abbr>
          </th>
          <th>
            <abbr title="Action">Action</abbr>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.activities.map(activity => (
          <tr key={activity.id}>
            <td>{activity.id}</td>
            <td>{activity.title}</td>
            <td>{activity.content}</td>
            <td>{activity.created_at}</td>
            <td>
              <span
                className="mr-2"
                onClick={() => history.push(`/activities/edit/${activity.id}`)}
              >
                <i className="far fa-edit pointer" />
              </span>
              <span onClick={() => handleDelete(activity.id)}>
                <i className="far fa-trash-alt has-text-danger pointer" />
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Activity;
