import React from "react";
import { Spinner } from "react-bootstrap";

export default function Loading({ show }) {
  return show ? (
    <Spinner size="sm" variant="primary" animation="border" />
  ) : null;
}
