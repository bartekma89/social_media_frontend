import React from "react";
import { connect } from "react-redux";
import { isEmpty, map } from "lodash";
import { Alert } from "reactstrap";
import { array } from "prop-types";

import { getAlert } from "../../selectors";

const AlertCmp = ({ alerts }) => (
  <>
    {!isEmpty(alerts) &&
      map(alerts, alert => (
        <Alert key={alert.id} color={alert.type} fade={true}>
          {alert.msg}
        </Alert>
      ))}
  </>
);

const mapStateToProps = state => ({
  alerts: getAlert(state)
});

Alert.propTypes = {
  alerts: array
};

export default connect(mapStateToProps)(AlertCmp);
