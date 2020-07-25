import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { useHistory, useParams } from "react-router-dom";
import {
  GET_ACTIVITY,
  CREATE_ACTIVITY,
  UPDATE_ACTIVITY
} from "../../graphql/activitiesGraphql";

const CreateActivity = () => {
  const { id } = useParams();
  const history = useHistory();
  const { data } = useQuery(GET_ACTIVITY, { variables: { id } });
  const [createActivity] = useMutation(CREATE_ACTIVITY, {
    onCompleted: () => history.push("/activities")
  });
  const [updateActivity] = useMutation(UPDATE_ACTIVITY, {
    onCompleted: () => {
      history.push("/activities");
    }
  });
  const { register, handleSubmit, errors, setValue } = useForm();
  const onSubmit = data => {
    if (!id) {
      createActivity({ variables: data });
    } else {
      updateActivity({ variables: { ...data, id } });
    }
  };
  console.log(errors);
  useEffect(() => {
    if (data?.activity) {
      setValue("title", data.activity.title);
      setValue("content", data.activity.content);
      setValue("address", data.activity.address);
      setValue("address", data.activity.address);
      setValue("city", data.activity.city);
    }
  }, [data, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container mt-3">
      <div className="field">
        <label className="label">Title</label>
        <div className="control">
          <input
            className="input"
            name="title"
            type="text"
            ref={register}
            placeholder="Text input"
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Content</label>
        <div className="control">
          <textarea
            className="textarea"
            ref={register}
            name="content"
            placeholder="Textarea"
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Address</label>
        <div className="control">
          <input
            className="input"
            name="address"
            ref={register}
            type="text"
            placeholder="Text input"
          />
        </div>
      </div>
      <div className="field">
        <label className="label">City</label>
        <div className="control">
          <input
            className="input"
            ref={register}
            name="city"
            type="text"
            placeholder="Text input"
          />
        </div>
      </div>
      <div className="control">
        <button className="button is-primary">Submit</button>
      </div>
    </form>
  );
};

export default CreateActivity;
