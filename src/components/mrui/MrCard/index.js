import styled from 'styled-components';
import defaultTheme from '../theme';
import PropTypes from 'prop-types';

import {
    Cell,
    LineText,
    ButtonOutline,
    ViewSalePrice,
    ViewNetSize,
    ViewLevel,
    ViewIsSaleWithLease,
    ViewIsPetAllowed,
    ViewNetSquarePrice,
    ViewContactName,
    ViewAgentID,
    ViewAvatar,
    ViewPartition,
    ViewSchool,
    ViewIsViewAble,
    ViewAgentStar,
    ViewMonthlyPayment,
    ViewDayListed,
    ViewBuyBudgetMax,
    ViewNetSizeMin,
    ViewJobNature,
    ViewIsFreeForSevenDay,
    ViewHasHomeHardware,
    ViewIncome,
    ViewLeasingPeriod,
    ViewDueDay,
    ViewEarlyTimeToView,
    ViewUserBuyHeading,
    ViewUserSaleHeading,
    ViewUserLeaseHeading,
    ViewUserRentHeading,
    ViewAgentSaleHeading,
    ViewAgentBuyHeading,
    ViewAgentLeaseHeading,
    ViewAgentRentHeading,
    ViewNetSquareLeasePrice,
    ViewLeasePrice,
    ViewLeaseDeposit,
    ViewNumOfPeopleLiving,
    ViewAverageResponseTime,
    ViewLeaseTaxInclusive
}
    from '../Elements';

import { Card as ext } from 'rebass';

const MrCard = styled(ext) `
    border-radius: 15px;
    background-color: white;   
    box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,.125);
    margin-top : 0;
    margin-bottom: 0.5rem;
    margin-left : auto;
    margin-right : auto;
`

MrCard.Cell = Cell;
MrCard.LineText = LineText;
MrCard.ButtonOutline = ButtonOutline;
MrCard.SalePrice = ViewSalePrice;
MrCard.NetSize = ViewNetSize;
MrCard.Level = ViewLevel;
MrCard.IsPetAllowed = ViewIsPetAllowed;
MrCard.IsSaleWithLease = ViewIsSaleWithLease;
MrCard.NetSquarePrice = ViewNetSquarePrice;
MrCard.ContactName = ViewContactName;
MrCard.AgentID = ViewAgentID;
MrCard.AgentStar = ViewAgentStar;
MrCard.Avatar = ViewAvatar;
MrCard.Partition = ViewPartition;
MrCard.School = ViewSchool;
MrCard.IsViewAble = ViewIsViewAble;
MrCard.MonthlyPayment = ViewMonthlyPayment;
MrCard.DayListed = ViewDayListed;
MrCard.BuyBudgetMax = ViewBuyBudgetMax;
MrCard.NetSizeMin = ViewNetSizeMin;
MrCard.JobNature = ViewJobNature;
MrCard.IsFreeForSevenDay = ViewIsFreeForSevenDay;;
MrCard.HasHomeHardware = ViewHasHomeHardware;
MrCard.Income = ViewIncome;
MrCard.LeasingPeriod = ViewLeasingPeriod;
MrCard.DueDay = ViewDueDay;
MrCard.EarlyTimeToView = ViewEarlyTimeToView;
MrCard.UserBuyHeading = ViewUserBuyHeading;
MrCard.UserSaleHeading = ViewUserSaleHeading;
MrCard.UserLeaseHeading = ViewUserLeaseHeading;
MrCard.UserRentHeading = ViewUserRentHeading;
MrCard.AgentSaleHeading = ViewAgentSaleHeading;
MrCard.AgentBuyHeading = ViewAgentBuyHeading;
MrCard.AgentLeaseHeading = ViewAgentLeaseHeading;
MrCard.AgentRentHeading = ViewAgentRentHeading;
MrCard.LeasePrice = ViewLeasePrice;
MrCard.LeaseDeposit = ViewLeaseDeposit;
MrCard.NetSquareLeasePrice = ViewNetSquareLeasePrice;
MrCard.NumOfPeopleLiving = ViewNumOfPeopleLiving;
MrCard.AverageResponseTime = ViewAverageResponseTime;
MrCard.LeaseTaxInclusive = ViewLeaseTaxInclusive;

MrCard.defaultProps = {
    // theme: defaultTheme,
};

export default MrCard;