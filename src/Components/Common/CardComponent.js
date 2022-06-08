import React from "react";
import { Card, CardBody } from "reactstrap";

const CardComponent = ({ className, children, ...rest }) => {
  return (
    <React.Fragment>
      <Card className={className} {...rest}>
        <CardBody>{children}</CardBody>
      </Card>
    </React.Fragment>
  );
};

export default CardComponent;
