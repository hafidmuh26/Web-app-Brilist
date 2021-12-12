import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import FilterHdrIcon from "@material-ui/icons/FilterHdr";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { loginData } from "../../../actions/login";
import styles from "./styles";
import { Image } from "@material-ui/icons";
import background from "../../assets/image/Untitled-1.jpg";
import logo from "../../assets/image/logo1.png";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: { nopeg: "", password: "" },
      error: null,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { data, error } = this.props;

    if (data && prevProps.data !== data) {
      if (data?.nopeg != null) {
      }
    } else if (prevProps.error !== error) {
      this.props.history.push("transaction");
      // this.setState({ error: error });
    }

    // if (prevProps.error !== error) {
    //   this.setState({ alertShow: true });
    // }
  }

  // hideAlert = () => {
  //   this.setState({ alertShow: false });
  // };

  onChange = (event) => {
    const { name, value } = event.target;
    const { form } = this.state;
    this.setState({ form: { ...form, [name]: value } });
  };

  // onSubmit = (event) => {
  //   event.preventDefault();
  //   this.props.loginData(this.state.form);
  //   console.log("login", this.state.form);
  // };

  render() {
    const { classes, loading } = this.props;
    const { form, error } = this.state;
    return (
      <div
        className={classes.background}
        style={{ backgroundImage: `url(${background})` }}
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />

          <Card className={classes.paper}>
            <img className={classes.logo} src={logo} alt="Logo" />
            <Typography
              component="h1"
              variant="h6"
              color="primary"
              fontWeight="Bold"
            >
              {"Login"}
            </Typography>
            <form className={classes.form} noValidate onSubmit={this.onSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="nopeg"
                label="Nomor Pegawai"
                name="nopeg"
                autoComplete="off"
                autoFocus={true}
                value={form.nopeg}
                onChange={this.onChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={form.password}
                onChange={this.onChange}
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                // type="submit"
                href="/home"
                disabled={loading}
              >
                {"Login"}
              </Button>

              {/* <Grid container className={classes.grid}>
                <Grid item xs>
                  <Link to="/forgotPassword" variant="body2">
                    {"Forgot password?"}
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/register" variant="body2">
                    {"Register"}
                  </Link>
                </Grid>
              </Grid> */}
            </form>
            <Box mt={8}>
              <Typography variant="body2" color="textSecondary" align="center">
                {"Copyright © "}
                <Link color="inherit" to="/">
                  {"BRILIST"}
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
              </Typography>
            </Box>
          </Card>

          <Snackbar
            open={this.state.alertShow}
            autoHideDuration={3000}
            onClose={this.hideAlert}
          ></Snackbar>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // data: state.loginData.data,
  // loading: state.loginData.loading,
  // error: state.loginData.error,
});

const mapDispatchToProps = {
  // loginData,
};

export default withStyles(styles, { withTheme: true })(
  connect(mapStateToProps, mapDispatchToProps)(Login)
);
