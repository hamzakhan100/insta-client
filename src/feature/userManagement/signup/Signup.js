import React, { useState, useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";

// Material-UI Components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";
import { userServices } from "../../../services";
// General Styles
const useStyles = makeStyles((theme) => ({
  Logo: {
    fontFamily: "Grand Hotel, cursive",
    marginBottom: "42px",
    width: "fit-content",
    margin: "0px auto",
    marginTop: "40px",
  },
  paper: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Signup = () => {
  const history = useHistory();
  const classes = useStyles();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [formatValidation, setFormatValidation] = useState(false);
  const [authValidation, setAuthValidation] = useState(false);
  const [confirmValidation, setConfirmValidation] = useState(false);

  const timerRef = useRef();

  useEffect(
    () => () => {
      clearTimeout(timerRef.current);
    },
    []
  );

  const handleInputChanges = (e) => {
    switch (e.target.name) {
      case "username":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };
  const handlePostData = async () => {
    const obj = {
      name,
      password,
      email,
    };
    const result = await userServices.signup(obj);

    if (result.data.error) {
      setFormatValidation(false);
      setAuthValidation(true);
    } else {
      // show the confirmation message
      setConfirmValidation(true);
      // set a timeOut before redirecting the user to login page
      timerRef.current = setTimeout(() => {
        history.push("/signin");
      }, 2800);
    }
    setAuthValidation(false);
    setFormatValidation(true);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Typography className={classes.Logo} variant="h2">
        Instagram
      </Typography>
      {/*  Check the format of the Email */}
      {formatValidation ? (
        <Alert variant="outlined" severity="error">
          Invalid Email format — check it out!
        </Alert>
      ) : null}
      {/*  Check the if the Email already Exist */}
      {authValidation ? (
        <Alert variant="outlined" severity="error">
          This Email is already token — check it out!
        </Alert>
      ) : null}
      {/* Success notification */}
      {confirmValidation ? (
        <Alert variant="outlined" severity="success">
          Your account has been created successfully — check it out!
        </Alert>
      ) : null}
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="UserName"
                name="username"
                variant="outlined"
                required
                fullWidth
                label="User Name"
                autoFocus
                value={name}
                onChange={handleInputChanges}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={handleInputChanges}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={handleInputChanges}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            className={classes.submit}
            onClick={handlePostData}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/" style={{ textDecoration: "none" }}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Signup;
