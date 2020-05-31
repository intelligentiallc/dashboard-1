import React from "react";
import { withTranslation } from "react-i18next";
import {Typography , Link} from '@material-ui/core';

const Copyright = ({ t }) => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        {t(" Your Website")}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default withTranslation()(Copyright);
