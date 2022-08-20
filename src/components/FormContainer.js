import React, { useState } from "react";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
import * as yup from "yup";
function FormContainer() {
  const Religion = [
    { key: "Enter religion", value: "" },
    { key: "Hindu", value: "Hindu" },
    { key: "Muslim", value: "Muslim" },
    { key: "Christian", value: "Christian" },
    { key: "Others", value: "Others" },
  ];
  const Sex = [
    { key: "Select option", value: "" },
    { key: "Female", value: "Female" },
    { key: "Male", value: "Male" },
    { key: "Others", value: "Others" },
  ];
  const IdType = [
    { key: "ID Type", value: "" },
    { key: "Normal", value: "Normal" },
    { key: "Special", value: "Special" },
  ];
  const Guard = [
    { key: "Enter Label", value: "" },
    { key: "Mr", value: "Mr" },
    { key: "Mrs", value: "Mrs" },
  ];
  const Martial = [
    { key: "Enter Martial Status", value: "" },
    { key: "Single", value: "Single" },
    { key: "Married", value: "Married" },
    { key: "Widow", value: "Widow" },
  ];
  const BloodGroup = [
    { key: "Select Bloog Group", value: "" },
    { key: "A+", value: "A+" },
    { key: "A-", value: "A-" },
    { key: "B-", value: "B-" },
    { key: "B+", value: "B+" },
    { key: "O-", value: "O-" },
    { key: "O+", value: "O+" },
    { key: "AB-", value: "AB-" },
    { key: "AB+", value: "AB+" },
  ];
  const initialValues = {
    name: "",
    sex: "",
    age: "",
    number: "",
    govtid: "",
    govid: "",
    guard: "",
    gl: "",
    email: "",
    emgnum: "",
    address: "",
    state: "",
    city: "",
    country: "",
    pincode: "",
    ocp: "",
    religion: "",
    mrtst: "",
    bloodg: "",
  };
  const validationschema = yup.object({
    name: yup
      .string()
      .max(35, "Must be 35 characters or less")
      .required("Required"),
    age: yup
      .string()
      .max(10, "age is not valid ot too many values")
      .required("Required"),
    sex: yup.string().required("Required"),
  });
  const [Users, SetUsers] = useState([]);
  const onSubmit = (values) => {
    let x = document.getElementById("hidden");
    x.style.display = "block";
    SetUsers([...Users, values]);
    Formik.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationschema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <div>
          <Form>
            <div className="part1">
              <h4>
                <u>Personal Details</u>
              </h4>
              <div className="flex">
                <div className="half">
                  <FormikControl
                    control="input"
                    type="text"
                    label="Name"
                    name="name"
                    placeholder="Enter name"
                    className="required"
                  />
                </div>
                <div className="child">
                  <FormikControl
                    control="input"
                    type="text"
                    label="Date of birth or Age"
                    placeholder="DD/MM/YY or Age in years"
                    name="age"
                    className="required"
                  />
                  <FormikControl
                    control="select"
                    label="Sex"
                    name="sex"
                    options={Sex}
                    className="required"
                  />
                </div>
              </div>
              <div className="flex">
                <div className="half">
                  <FormikControl
                    control="input"
                    type="text"
                    label="Number"
                    name="number"
                    placeholder="Enter mobile number"
                  />
                </div>
                <div className="child">
                  <FormikControl
                    control="select"
                    label="Govt issued ID type"
                    name="govtid"
                    options={IdType}
                  />
                  <FormikControl
                    control="input"
                    type="text"
                    name="govid"
                    placeholder="Enter govt ID"
                  />
                </div>
              </div>
            </div>
            <div className="part2">
              <h4>
                <u>Contact Details</u>
              </h4>
              <div className="flex">
                <div className="child">
                  <FormikControl
                    control="select"
                    label="Guardian details"
                    name="gl"
                    options={Guard}
                  />
                  <FormikControl
                    control="input"
                    type="text"
                    placeholder="Guardian name"
                    name="guard"
                  />
                </div>
                <div className="child">
                  <FormikControl
                    control="input"
                    type="email"
                    label="Email"
                    name="email"
                    placeholder="Enter email"
                  />
                  <FormikControl
                    control="input"
                    type="text"
                    label="Emergency contact numnber"
                    name="emgnum"
                    placeholder="Enter Emergency No"
                  />
                </div>
              </div>
            </div>
            <div className="part3">
              <h4>
                <u>Address Details</u>
              </h4>
              <div className="flex">
                <div className="child">
                  <FormikControl
                    control="input"
                    type="text"
                    label="Address"
                    name="address"
                    placeholder="Enter Address"
                  />
                </div>
                <div className="child">
                  <FormikControl
                    control="input"
                    type="text"
                    label="State"
                    name="state"
                    placeholder="Enter state"
                  />
                  <FormikControl
                    control="input"
                    type="text"
                    label="City"
                    name="city"
                    placeholder="Enter City/Town/Village"
                  />
                </div>
              </div>
              <div className="child">
                <FormikControl
                  control="input"
                  type="text"
                  label="Country"
                  name="country"
                  placeholder="Country"
                />
                <FormikControl
                  control="input"
                  type="text"
                  label="Pincode"
                  placeholder="Pincode"
                  name="pincode"
                />
              </div>
            </div>
            <div className="part4">
              <h4>
                <u>Other Details</u>
              </h4>
              <div className="flex">
                <div className="child">
                  <FormikControl
                    control="input"
                    type="text"
                    label="Occupation"
                    name="ocp"
                    placeholder="Enter occupation"
                  />
                  <FormikControl
                    control="select"
                    label="Religion"
                    name="religion"
                    options={Religion}
                  />
                </div>
                <div className="child">
                  <FormikControl
                    control="select"
                    label="Martial status"
                    name="mrtst"
                    placeholder="Enter martial status"
                    options={Martial}
                  />
                  <FormikControl
                    control="select"
                    label="Blood group"
                    name="bloodg"
                    options={BloodGroup}
                  />
                </div>
              </div>
            </div>
            <div className="left">
              <div></div>
              <div>
              <button type="reset" className="danger">
                Cancel
              </button>
              <button type="submit"  className="enter">
                Submit
              </button>
              </div>
            </div>
          </Form>
         <div>
         <h4 id="hidden">
            <u>Users</u>
          </h4>
         </div>
          {Users.map((user) => {
            return (
              <div key={user.name}>
                <details>
                  <summary>
                    <b>{user.name}</b>
                  </summary>

                  <b>
                    {" "}
                    <p className="move"> Age or DOB: {user.age}</p>
                  </b>

                  <b>
                    {" "}
                    <p className="move">Gender: {user.sex}</p>
                  </b>
                </details>
              </div>
            );
          })}
        </div>
      )}
    </Formik>
  );
}

export default FormContainer;
