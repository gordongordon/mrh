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

export const SaleBasic = ( { onWhatsapp, onCall, onTriggetNext, p,isBackgroundImage, onResponse, index  } ) => (
      <MrCard m={3} w={18 / 20} onClick={() => onResponse && onResponse(p)}>

        {isBackgroundImage && <BackgroundImage ratio={2 / 5} src="http://www.kowsinn.com/dc02.jpg" />}
        <Flex wrap mx={1} my={1}>
        <MrCard.LineText>
            <Text f={4}>{p.contactName}</Text>
          </MrCard.LineText>
            
          <MrCard.SalePrice value={p.salePrice} />
          <MrCard.NetSize value={p.netSize} />
          <MrCard.NetSquarePrice value={p.sellerNetSquarePrice} />
          <MrCard.Partition room={p.numOfRoom} bathRoom={p.numOfBathroom} livingRoom={p.numOfLivingroom} />

          <MrCard.Level value={p.levelLabel} />
          <MrCard.IsPetAllowed value={p.isPetAllowed} />
          <MrCard.IsViewAble value={p.isViewAble} />
          <MrCard.IsSaleWithLease value={p.isSaleWithLease} />

          <MrCard.School primary={95} secondary="馬鞍山區" />
          <MrCard.EarlyTimeToView value={p.earlyTimeToViewLabel} />
          <MrCard.DayListed value={p.dayListed} />
          <MrCard.MonthlyPayment value={19389} />

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


SaleBasic.propTypes = {
  onWhatsapp : PropTypes.func,
  onCall : PropTypes.func,
   onTriggetNext : PropTypes.func,
    p : PropTypes.object, 
};

SaleBasic.defaultProps = {
  onWhatsapp :  undefined,
  onCall :  undefined,
   onTriggetNext :  undefined,
    p :  undefined,
};
