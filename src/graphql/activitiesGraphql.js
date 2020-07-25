import { gql } from "apollo-boost";

export const GET_ACTIVITIES = gql`
  query GET_ACTIVITIES {
    activities(limit: 10, start: 0) {
      id
      title
      content
      address
      city
      active
      created_at
      updated_at
    }
  }
`;

export const UPDATE_ACTIVITY = gql`
  mutation UPDATE_ACTIVITY(
    $id: ID!
    $title: String
    $content: String
    $city: String
    $address: String
  ) {
    updateActivity(
      input: {
        where: { id: $id }
        data: {
          title: $title
          content: $content
          city: $city
          address: $address
          active: true
        }
      }
    ) {
      activity {
        id
      }
    }
  }
`;
export const GET_ACTIVITY = gql`
  query GET_ACTIVITy($id: ID!) {
    activity(id: $id) {
      id
      title
      content
      address
      city
      active
      created_at
      updated_at
    }
  }
`;
export const CREATE_ACTIVITY = gql`
  mutation CREATE_ACTIVITY(
    $title: String
    $content: String
    $city: String
    $address: String
    $active: Boolean
  ) {
    createActivity(
      input: {
        data: {
          title: $title
          content: $content
          city: $city
          address: $address
          active: $active
        }
      }
    ) {
      activity {
        id
      }
    }
  }
`;
