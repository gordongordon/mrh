// src/blocks/Card/index.js
import React from "react";
//import defaultTheme from "../theme";
import PropTypes from "prop-types";
//import moment from "moment";

import {
  BackgroundImage,
  Flex,
  Text
} from "rebass";

import MrCard from '../MrCard';

export const UserSaleProperty = ( { onWhatsapp, onCall, onTriggetNext, p,isBackgroundImage, onResponse, index  } ) => (
      <MrCard w={19 / 20}>
        <MrCard.UserSaleHeading location={p.addressLocationLabel} building={p.nameOfBuildingLabel} recordNumber={index} />
        {isBackgroundImage && <BackgroundImage ratio={2 / 5} src="http://www.kowsinn.com/dc02.jpg" />}
        <Flex wrap mx={1} my={1}>
          <MrCard.LineText>
            <Text f={3}>重點</Text>
          </MrCard.LineText>
          <MrCard.SalePrice value={p.salePrice} />
          <MrCard.NetSize value={p.netSize} />
          <MrCard.NetSquarePrice value={p.sellerNetSquarePrice} />
          <MrCard.Partition room={p.numOfRoom} bathRoom={p.numOfBathroom} livingRoom={p.numOfLivingroom} />
          <MrCard.LineText>
            <Text f={3}>特徵</Text>
          </MrCard.LineText>
          <MrCard.Level value={p.levelLabel} />
          <MrCard.IsPetAllowed value={p.isPetAllowed} />
          <MrCard.IsViewAble value={p.isViewAble} />
          <MrCard.IsSaleWithLease value={p.isSaleWithLease} />
          <MrCard.LineText>
            <Text f={3}>其他</Text>
          </MrCard.LineText>
          <MrCard.School primary={95} secondary="馬鞍山區" />
          <MrCard.EarlyTimeToView value={p.earlyTimeToViewLabel} />
          <MrCard.DayListed value={p.dayListed} />
          <MrCard.MonthlyPayment value={19389} />
          <MrCard.LineText>
            <Text f={3}>聯絡方式</Text>
          </MrCard.LineText>
          <MrCard.ContactName value={p.contactName} />

          <MrCard.LineText>
            <Text f={3}>下一步行動</Text>
          </MrCard.LineText>
          <MrCard.Cell px={2} py={1} width={1} align="center">
          {onResponse &&
              <MrCard.ButtonOutline
                onClick={() => onResponse(p)}
                width={7 / 22}
                children="Response Now!"
                f={5}
                color="#F55869"
              />
            }            
            {onCall &&
              <MrCard.ButtonOutline
                onClick={() => onCall(p.contactPhone)}
                width={7 / 22}
                children={p.contactPhone}
                f={5}
                color="#F55869"
              />
            }
            {onWhatsapp &&
              <MrCard.ButtonOutline

                onClick={() => onWhatsapp(p.contactPhone)}
                mx={1}
                width={7 / 22}
                children="Whatsapp"
                f={5}
                color="#F55869"
              />
            }
            {onTriggetNext && <MrCard.ButtonOutline
              onClick={() => onTriggetNext()}
              width={7 / 22}
              children="Home"
              f={5}
              color="#F55869"
            />
            }
          </MrCard.Cell>
        </Flex>
        </MrCard>
    );


UserSaleProperty.propTypes = {
  onWhatsapp : PropTypes.func,
  onCall : PropTypes.func,
   onTriggetNext : PropTypes.func,
    p : PropTypes.object, 
};

UserSaleProperty.defaultProps = {
  onWhatsapp :  undefined,
  onCall :  undefined,
   onTriggetNext :  undefined,
    p :  undefined,
};
