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

// <MrCard.UserBuyHeading location={p.addressLocationLabel} building={p.nameOfBuildingLabel} recordNumber={index} />


{/* <MrCard.LineText>
<Text f={3}>重點 </Text>
</MrCard.LineText> */}
export const UserBuyProperty = ( { onWhatsapp, onCall, onTriggetNext, p, isBackgroundImage, onResponse, index } ) => (

      <MrCard w={19 / 20} onClick={() => onResponse && onResponse(p)}>
      <MrCard.UserBuyHeading location={p.addressLocationLabel} building={p.nameOfBuildingLabel} recordNumber={index} />
 
        {isBackgroundImage && <BackgroundImage ratio={2 / 5} src="http://www.kowsinn.com/dc02.jpg" />}
        <Flex wrap mx={1} my={1}>
        <MrCard.LineText>
            <Text f={3}>重點</Text>
          </MrCard.LineText>          
          <MrCard.SalePrice f={3} value={p.buyBudgetMax} />
          <MrCard.NetSize f={3} value={p.netSizeMin} />
          <MrCard.NetSquarePrice f={3} value={p.sellerNetSquarePrice} />
          <MrCard.Partition f={3} room={p.numOfRoom} bathRoom={p.numOfBathroom} livingRoom={p.numOfLivingroom} />

          <MrCard.LineText>
            <Text f={3}>特徵</Text>
          </MrCard.LineText>


          <MrCard.IsPetAllowed value={p.isPetAllowed} />
          <MrCard.IsViewAble value={p.isViewAble} />
          <MrCard.IsSaleWithLease value={p.isSaleWithLease} />
 
          <MrCard.LineText>
            <Text f={3}>其他</Text>
          </MrCard.LineText>

          <MrCard.EarlyTimeToView value={p.earlyTimeToViewLabel} />
          <MrCard.DayListed value={p.dayListed} />

          <MrCard.LineText>
            <Text f={3}>聯絡方式</Text>
          </MrCard.LineText>
          <MrCard.ContactName value={p.contactName} />

          <MrCard.Cell px={2} py={1} width={1} align="center">

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


    // {onResponse &&
    //   <MrCard.ButtonOutline
    //     onClick={() => onResponse(p)}
    //     width={7 / 22}
    //     children="Response Now!"
    //     f={5}
    //     color="#F55869"
    //   />
    // }

UserBuyProperty.propTypes = {
  onWhatsapp : PropTypes.func,
  onCall : PropTypes.func,
   onTriggetNext : PropTypes.func,
   onResponse : PropTypes.func,
    p : PropTypes.object, 
};

UserBuyProperty.defaultProps = {
  onWhatsapp :  undefined,
  onCall :  undefined,
   onTriggetNext :  undefined,
   onResponse : undefined,
    p :  undefined,
};
