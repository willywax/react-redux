import React from "react";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import PropTypes from "prop-types";

const CourseForm = ({ onChange, course, authors, onSave, saving, errors }) => {
  return (
    <form onSubmit={onSave}>
      <h2>{course.id ? "Edit Course" : "Add Course"}</h2>

      <TextInput
        name="title"
        label="title"
        value={course.title}
        onChange={onChange}
        error=""
      />

      <SelectInput
        name="authorId"
        label="author"
        value={course.authorId || ""}
        defaultOption="Select Author"
        options={authors.map(author => ({
          value: author.id,
          text: author.name
        }))}
        onChange={onChange}
        error=""
      />

      <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error=""
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving...." : "Save"}
      </button>
    </form>
  );
};

CourseForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  saving: PropTypes.bool.isRequired
};

export default CourseForm;
