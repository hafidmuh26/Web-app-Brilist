const styles = (theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 30,
  },
  // avatar: {
  //   margin: theme.spacing(1),
  //   backgroundColor: "skyblue",
  //   borderRadius: 10,
  // },
  form: {
    width: "100%",
  },
  submit: {
    marginTop: 10,
    marginBottom: 10,
  },
  googleIcon: {
    width: 30,
    marginRight: theme.spacing(3),
  },
  logo: {
    height: 90,
    width: 200,
  },
  background: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
    padding: 70,
  },
});

export default styles;
