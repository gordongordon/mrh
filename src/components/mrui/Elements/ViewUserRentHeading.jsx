import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Absolute, Pre, Relative, Label } from 'rebass';

const ViewUserRentHeading = ({ location, building, recordNumber }) => (
    <Heading p={1} f='1rem' color="white" bg={["blue", "#F55869"]}>
        想租樓盤: {location} , {building}
            <Relative>
                <Absolute bottom right>
                <Label f={3}>LLLL編號:MOS-{recordNumber} </Label>
                </Absolute>
            </Relative>
    </Heading>);

ViewUserRentHeading.defaultProps = {
    location: "Missing",
    building: "Missing",
    recordNumber : 0
};

ViewUserRentHeading.propTypes = {
    location: PropTypes.string.isRequired,
    building: PropTypes.string.isRequired,
    recordNumber: PropTypes.number.isRequired
};

export default ViewUserRentHeading;


