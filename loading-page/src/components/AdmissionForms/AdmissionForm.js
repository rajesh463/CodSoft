import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Row, Col, Container, Form } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import StudentInfo from "../../api/StudentInfo";
import Showfiles from "../../api/FileInfo";

function AdmissionForm() {
  const { currentUser } = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [address, setAddress] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [marks10th, setmarks10th] = useState("");

  const [cast, SetCast] = useState("open");
  const [program, SetProgram] = useState("");
  const [gender, SetGender] = useState("");
  const [studentMobNo, SetStudentMobNO] = useState("");
  const [fatherMobNo, SetFatherMobNo] = useState("");
  const [fatherName, SetFatherName] = useState("");
  const [annualIncome, SetAnnualIncome] = useState("");

  const [castCertificate, SetCastCertificate] = useState("");
  const [castCertificateName, SetCastCertificateName] = useState("");
  const [isCastCertificateFilePicked, SetisCastCertificateFilePicked] =
    useState(true);
  const [viewCast, SetViewCast] = useState(false);

  const [incomeCertificate, SetIncome] = useState("");
  const [incomeCertificateName, SetIncomeCertificateName] = useState("");
  const [isIncomeCertificateFilePicked, SetIsIncomeCertificateFilePicked] =
    useState(true);
  const [viewIncome, SetViewIncome] = useState(false);

  const [leavingCertificate, SetLeavingCertificate] = useState("");
  const [leavingcertificateName, SetLeavingCertificateName] = useState("");
  const [isLeavingCertificateFilePicked, SetIsLeavingCertificateFilePicked] =
    useState(true);
  const [viewLeaving, SetViewLeaving] = useState(false);

  const [markSheet10th, SetMarkSheet10th] = useState("");
  const [tenthMarkSheetName, SetTenthMarkSheetName] = useState("");
  const [isTenthMarkSheetFilePicked, SetIsTenthMarkSheetFilePicked] =
    useState(true);
  const [viewTenthMark, SetViewTenthMark] = useState(false);

  const [msg , SetMsg] = useState("");

  const history = useHistory();
  const params = useParams();
  // const [msg ,SetMes] = useState("");

  // const [castSelectedFile, SetcastSelectedFile] = useState();

  // const changeCastCertificateHandler = (event) => {
  //   SetcastSelectedFile(event.target.files[0]);
  //   SetisCastCertificateFilePicked(true);
  // };

  const onClickRemoveCastData = () => {
    SetisCastCertificateFilePicked(true);
    SetViewCast(false);
  };
  const onClickRemoveLeavingData = () => {
    SetIsLeavingCertificateFilePicked(true);
    SetViewLeaving(false);
  };

  const onClickRemoveIncomeData = () => {
    SetIsIncomeCertificateFilePicked(true);
    SetViewIncome(false);
  };
  const onClickRemoveTenthMarkSheetData = () => {
    SetIsTenthMarkSheetFilePicked(true);
    SetViewTenthMark(false);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // const params = useParams();

  // const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {
    const handelGetReq = async () => {
      console.log("hello");
      const data = await StudentInfo.get(`/getstudentinfo/${currentUser.uid}`);
      console.log(data.data);
      setName(data.data.StudentData.Name);
      console.log(data.data.StudentData.Name);
      setEmail(data.data.StudentData.Email);
      setBirthDate(data.data.StudentData.DOB);
      setAddress(data.data.StudentData.Address);
      setSchoolName(data.data.StudentData.SchoolName);
      setmarks10th(data.data.StudentData.TenthMarks);

      SetMarkSheet10th(data.data.StudentData.TenthMarksheet);
      SetCast(data.data.StudentData.Cast);
      SetGender(data.data.StudentData.Gender);
      SetStudentMobNO(data.data.StudentData.MobileNo);
      SetFatherMobNo(data.data.StudentData.FatherMobile);
      SetFatherName(data.data.StudentData.FatherName);
      SetAnnualIncome(data.data.StudentData.AnnualIncome);
      SetProgram(data.data.StudentData.program);
     
      if(data.data.state=="Accepted"){
        SetMsg("Your Form is Accepted! Now you can visit our collage and continue the admission process");
      }else if(data.data.state == "Rejected"){
        SetMsg("Your Form got Rejected! You can re-apply");
      }else if(data.data.state=="No Action"){
        SetMsg("No Action Taken by Admin Plz check sometimes later");
      }else{
        SetMsg("");
      }

      console.log("Hello ji ");

      SetCastCertificate(data.data.StudentData.CastCertificate);
      if (
        data.data.StudentData.CastCertificate != "NULL" &&
        data.data.StudentData.CastCertificate !== ""
      ) {
        SetisCastCertificateFilePicked(false);
        SetViewCast(true);
      }

      SetLeavingCertificate(data.data.StudentData.LeavingCertificate);
      if (
        data.data.StudentData.LeavingCertificate != "NULL" &&
        data.data.StudentData.LeavingCertificate !== ""
      ) {
        SetIsLeavingCertificateFilePicked(false);
        SetViewLeaving(true);
      }

      SetIncome(data.data.StudentData.incomeCertificate);
      if (
        data.data.StudentData.incomeCertificate != "NULL" &&
        data.data.StudentData.incomeCertificate !== ""
      ) {
        SetIsIncomeCertificateFilePicked(false);
        SetViewIncome(true);
      }
      SetMarkSheet10th(data.data.StudentData.TenthMarksheet);
      if (
        data.data.StudentData.TenthMarksheet != "NULL" &&
        data.data.StudentData.TenthMarksheet !== ""
      ) {
        SetIsTenthMarkSheetFilePicked(false);
        SetViewTenthMark(true);
      }

      //console.log(CastCertificate);
      //console.log(data.data.StudentData .CastCertificate)
    };
    handelGetReq();
  }, [
    setName,
    setEmail,
    setBirthDate,
    setAddress,
    setSchoolName,
    setmarks10th,
    SetCast,
    SetGender,
    SetProgram,

    SetCastCertificate,
    SetCastCertificateName,
    SetisCastCertificateFilePicked,
    SetViewCast,

    SetIncome,
    SetCastCertificateName,
    SetIsIncomeCertificateFilePicked,
    SetViewCast,

    SetMarkSheet10th,
    SetTenthMarkSheetName,
    SetIsTenthMarkSheetFilePicked,
    SetViewTenthMark,

    SetLeavingCertificate,
    SetLeavingCertificateName,
    SetIsLeavingCertificateFilePicked,
    SetViewLeaving,

    SetStudentMobNO,
    SetFatherMobNo,
    SetFatherName,
    SetAnnualIncome,
    SetMsg
  ]);
  const fileHandler = (e) => {
    if (e.target.name == "markSheet10th") {
      SetMarkSheet10th(e.target.files[0]);
      console.log(e.target.files[0]);
    } else if (e.target.name == "incomeCertificate") {
      SetIncome(e.target.files[0]);
      console.log(e.target.files[0]);
    } else if (e.target.name == "castCertificate") {
      SetCastCertificate(e.target.files[0]);
      console.log(e.target.files[0]);
      // SetisCastCertificateFilePicked(false);
    } else if (e.target.name == "leavingCertificate") {
      SetLeavingCertificate(e.target.files[0]);
      console.log("leaving certificate");
      console.log(e.target.files[0]);
    }
  };

  // console.log(currentUser)
  const submit = async () => {
    const Formdata = new FormData();
    Formdata.append("uid", currentUser.uid);
    Formdata.append("name", name);
    Formdata.append("email", email);
    Formdata.append("birthDate", birthDate);
    Formdata.append("address", address);
    Formdata.append("schoolName", schoolName);
    Formdata.append("marks10th", marks10th);
    Formdata.append("markSheet10th", markSheet10th);
    Formdata.append("incomeCertificate", incomeCertificate);
    Formdata.append("cast", cast);
    Formdata.append("gender", gender);
    Formdata.append("castCertificate", castCertificate);
    Formdata.append("leavingCertificate", leavingCertificate);
    Formdata.append("studentMobNo", studentMobNo);
    Formdata.append("fatherMobNo", fatherMobNo);
    Formdata.append("fatherName", fatherName);
    Formdata.append("annualIncome", annualIncome);
    Formdata.append("program",program);

    console.log(Formdata);
    console.log("incomecertificat");
    console.log(incomeCertificate);

    console.log("castcertificat");
    console.log(castCertificate);

    console.log("leavingcertificat");
    console.log(leavingCertificate);

    console.log("marksshet10certificat");
    console.log(markSheet10th);

    const data = await StudentInfo.post("/poststudentinfo", Formdata);
    // console.log(data)
    if (data.data.msg != "") {
      console.log(data.data.msg);
      history.push("/success");
    }
  };

  const handelCastChange = (e) => {
    SetCast(e.target.value);
  };
  const handelProgramChange = (e) => {
    SetProgram(e.target.value);
  };
  const handelGenderChange = (e) => {
    SetGender(e.target.value);
  };

  const openFile = (e) => {
    StudentInfo.get("/showfiles");
  };
  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);

  return (
    <div>
  
      <div className="Alert-admissionform">
    
        
      <div className="alert alert-warning alert-dismissible d-flex align-items-center fade show">
        <i className="bi-exclamation-triangle-fill" />
        <strong className="mx-2">Notice!</strong> {msg}
        <button type="button" className="btn-close" id="closebutton-alert" data-bs-dismiss="alert" />
      </div>
        </div>
      <form onSubmit={handleSubmit(submit)}>
        <div className="admissionForm-flexbox">
          <div className="admission-sections-headings">
            <h6>Personal Details</h6>
          </div>
          <div className="admission-sections">
            {/* Name */}
            <div>
              <label className="label-admissionForm">Enter Your Name*</label>

              <input
                type="text"
                name="name"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="biggerinput-admissionForm"
              />
            </div>
            <div class="note-admission">
              <p>
                <strong>Note!</strong> Please enter your name according to your
                10th Marksheet
              </p>
            </div>
            <Container fluid className="AdmissionForm-container">
              <Row>
                <Col>
                  <div>
                    <label className="label-admissionForm">Email</label>

                    <input
                      type="text"
                      name="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      className="biggerinput-admissionForm"
                    />
                  </div>
                </Col>

                <Col>
                  <div>
                    <label className="smallerlabel-admissionForm">
                      Mobile No*
                    </label>
                    <input
                      type="text"
                      name="studentMobNo"
                      value={studentMobNo}
                      required
                      onChange={(e) => {
                        SetStudentMobNO(e.target.value);
                      }}
                      className="input-admissionForm-marks"
                    />
                  </div>
                </Col>
              </Row>
            </Container>

            {/* Address */}
            <div>
              <label className="label-admissionForm">Address*</label>
              <input
                type="text"
                name="address"
                value={address}
                required
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                className="biggerinput-admissionForm"
              />
              <Container fluid className="AdmissionForm-container">
                <Row>
                  <Col>
                    <div className="Caste-admission">
                      <label className="smallerlabel-admissionForm">
                        Gender*
                      </label>
                      <br />
                      <select
                        value={gender}
                        required
                        onChange={handelGenderChange}
                        className="input-admissionForm"
                      >
                        <option value="">Select Your Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </Col>

                  <Col>
                    <div className="Caste-admission">
                      <label className="smallerlabel-admissionForm">
                        Date Of Birth*
                      </label>
                      <br />
                      <input
                        required
                        type="date"
                        name="birthDate"
                        value={birthDate}
                        onChange={(e) => {
                          setBirthDate(e.target.value);
                        }}
                        className="input-admissionForm"
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
              <Container fluid className="AdmissionForm-container">
                <Row>
                  <Col>
                    <div>
                      <label className="label-admissionForm">
                        Father's Name*
                      </label>
                      <input
                        type="text"
                        required
                        name="fatherName"
                        value={fatherName}
                        onChange={(e) => {
                          SetFatherName(e.target.value);
                        }}
                        className="biggerinput-admissionForm"
                      />
                    </div>
                  </Col>

                  <Col>
                    <div>
                      <label className="smallerlabel-admissionForm">
                        Mobile No*
                      </label>
                      <input
                        type="text"
                        name="fatherMobNo"
                        required
                        value={fatherMobNo}
                        onChange={(e) => {
                          SetFatherMobNo(e.target.value);
                        }}
                        className="input-admissionForm-marks"
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            {/* 10th school name */}
          </div>

          {/* 10th marks */}
          <div className="admission-sections-headings">
            <h6>Past Qualifications</h6>
          </div>
          <div className="admission-sections">
            <Container fluid className="AdmissionForm-container">
              <Row>
                <Col>
                  <div>
                    <label className="label-admissionForm">
                      10th School Name*
                    </label>
                    <input
                      type="text"
                      required
                      name="schoolName"
                      value={schoolName}
                      onChange={(e) => {
                        setSchoolName(e.target.value);
                      }}
                      className="biggerinput-admissionForm"
                    />
                  </div>
                </Col>

                <Col>
                  <div>
                    <label className="smallerlabel-admissionForm">
                      10th marks*
                    </label>
                    <input
                      type="text"
                      required
                      name="marks10thPercentages"
                      value={marks10th}
                      onChange={(e) => {
                        setmarks10th(e.target.value);
                      }}
                      className="input-admissionForm-marks"
                    />
                  </div>
                </Col>
              </Row>
            </Container>

            <div class="note-admission">
              <p>
                <strong>Note!</strong> While uploading the documents, please
                rename it consisting your name. For e.g- Atharva Meher(Income
                Certificate)
              </p>
            </div>
            <div className="marks-caste">
              <Container className="AdmissionForm-container">
                <br />
                <Row>
                  <Col>
                    <div>
                      <label className="label-admissionForm">
                        10th mark sheet*
                      </label>
                      <input
                        className="upload-admissionForm"
                        type="file"
                        style={{
                          display: `${
                            isTenthMarkSheetFilePicked ? "" : "none"
                          }`,
                        }}
                        onChange={fileHandler}
                        name="markSheet10th"
                      />
                      {/* <a href={Showfiles + markSheet10th} target="_blank">
              View
            </a> */}
                      <div>
                        <a
                          id="view-button"
                          style={{ display: `${viewTenthMark ? "" : "none"}` }}
                          href={Showfiles + markSheet10th}
                          target="_blank"
                          className="btn btn-info"
                        >
                          View
                        </a>
                        <span
                          id="viewx-button"
                          className="btn btn-danger"
                          onClick={onClickRemoveTenthMarkSheetData}
                          style={{
                            display: `${
                              isTenthMarkSheetFilePicked ? "none" : ""
                            }`,
                          }}
                        >
                          x
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    {" "}
                    <div>
                      <label className="label-admissionForm">
                        Leaving Certificate*
                      </label>
                      <input
                        className="upload-admissionForm"
                        type="file"
                        style={{
                          display: `${
                            isLeavingCertificateFilePicked ? "" : "none"
                          }`,
                        }}
                        onChange={fileHandler}
                        name="leavingCertificate"
                      />
                      {/* <a href={Showfiles + incomeCertificate} target="_blank">
                View
              </a> */}
                      <div>
                        <a
                          id="view-button"
                          className="btn btn-info"
                          style={{ display: `${viewLeaving ? "" : "none"}` }}
                          href={Showfiles + leavingCertificate}
                          target="_blank"
                        >
                          View
                        </a>
                        <span
                          id="viewx-button"
                          className="btn btn-danger"
                          onClick={onClickRemoveLeavingData}
                          style={{
                            display: `${
                              isLeavingCertificateFilePicked ? "none" : ""
                            }`,
                          }}
                        >
                          X
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col></Col>
                </Row>
              </Container>
            </div>
          </div>

          {/* program select */}

          <div className="admission-sections-headings">
            <h6>Select Program</h6>
          </div>
          <div className="admission-sections">
            <Container fluid className="AdmissionForm-container">
              <Row>
                <Col>
                  {" "}
                  <div className="Caste-admission">
                    <label className="smallerlabel-admissionForm">Program*</label>
                    <br />
                    <select
                      value={program}
                      onChange={handelProgramChange}
                      required
                      className="input-admissionForm"
                    >
                      <option value="">Select Your Caste</option>
                      <option value="commerce">Commerce</option>
                      <option value="art">Art</option>
                      <option value="science">Science</option>
                    </select>
                  </div>
                </Col>
                
              </Row>
            </Container>
          </div>

          {/* end */}

          <div className="admission-sections-headings">
            <h6>Caste Details</h6>
          </div>
          <div className="admission-sections">
            <Container fluid className="AdmissionForm-container">
              <Row>
                <Col>
                  {" "}
                  <div className="Caste-admission">
                    <label className="smallerlabel-admissionForm">Caste*</label>
                    <br />
                    <select
                      value={cast}
                      onChange={handelCastChange}
                      required
                      className="input-admissionForm"
                    >
                      <option value="null">Select Your Caste</option>
                      <option value="open">OPEN</option>
                      <option value="obc">OBC</option>
                      <option value="st">ST</option>
                      <option value="sc">SC</option>
                    </select>
                  </div>
                </Col>
                <Col>
                  <div style={{ display: `${cast == "open" ? "none" : ""}` }}>
                    <label className="label-admissionForm">
                      Caste Certificate*
                    </label>
                    <input
                      className="upload-admissionForm"
                      type="file"
                      // value = {castCertificate}
                      onChange={fileHandler}
                      style={{
                        display: `${isCastCertificateFilePicked ? "" : "none"}`,
                      }}
                      name="castCertificate"
                    />

                    {/* <div>
                  <p>{castCertificate=="" && castCertificateName!="NULL"?"File Name "+castCertificateName:"File Name "+castCertificate.name}</p>
                </div> */}
                    <div>
                      {" "}
                      <a
                        className="btn btn-info"
                        style={{ display: `${viewCast ? "" : "none"}` }}
                        href={Showfiles + castCertificate}
                        target="_blank"
                        id="view-button"
                      >
                        View
                      </a>
                      <span
                        id="viewx-button"
                        className="btn btn-danger"
                        onClick={onClickRemoveCastData}
                        style={{
                          display: `${
                            isCastCertificateFilePicked ? "none" : ""
                          }`,
                        }}
                      >
                        X
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="admission-sections-headings">
            <h6>Income Details</h6>
          </div>
          <div className="admission-sections">
            <Container className="AdmissionForm-container">
              <Row>
                <Col>
                  <div>
                    <label className="smallerlabel-admissionForm">
                      Enter your Annual Income*
                    </label>
                    <input
                      type="text"
                      name="annualIncome"
                      value={annualIncome}
                      required
                      onChange={(e) => {
                        SetAnnualIncome(e.target.value);
                      }}
                      className="input-admissionForm-marks"
                    />
                  </div>
                </Col>

                <Col>
                  {" "}
                  <div>
                    <label className="label-admissionForm">
                      Income Certificate*
                    </label>
                    <input
                      id="view-button"
                      className="upload-admissionForm"
                      type="file"
                      style={{
                        display: `${
                          isIncomeCertificateFilePicked ? "" : "none"
                        }`,
                      }}
                      onChange={fileHandler}
                      name="incomeCertificate"
                    />
                    {/* <a href={Showfiles + incomeCertificate} target="_blank">
                View
              </a> */}
                    <div>
                      {" "}
                      <a
                        id="view-button"
                        className="btn btn-info"
                        style={{ display: `${viewIncome ? "" : "none"}` }}
                        href={Showfiles + incomeCertificate}
                        target="_blank"
                      >
                        View
                      </a>
                      <span
                        id="viewx-button"
                        className="btn btn-danger"
                        onClick={onClickRemoveIncomeData}
                        style={{
                          display: `${
                            isIncomeCertificateFilePicked ? "none" : ""
                          }`,
                        }}
                      >
                        X
                      </span>
                    </div>
                  </div>
                </Col>

                <Col></Col>
              </Row>
            </Container>{" "}
          </div>
        </div>

        <div
          class="col-md-12 text-center"
          className="submit-button-admissionForm"
        >
          <button
            type="submit"
            variant="success"
            className="submit-button-admissionForm1"
            class="btn btn-outline-success"
          >
            Submit
          </button>
        </div>
        <br />
      </form>
    </div>
  );
}

export default AdmissionForm;
