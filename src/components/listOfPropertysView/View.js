import React from "react";
import {
  List,
  Toast,
  NoticeBar,
  Icon,
  Card,
  SwipeAction,
  Stepper,
  Picker,
  DatePicker,
  Badge,
  Flex,
  InputItem,
  WhiteSpace,
  Button,
  SegmentedControl
} from "antd-mobile";
import { createForm } from "rc-form";
import moment from "moment";
import "moment/locale/zh-cn";
import { propertys } from "userModelView";
import { observer } from "mobx-react";
import MobxStore from "mobxStore";
import views from "views";

import Error from './Error';
import Loading from './Loading';
import Records from './Records';

// @observer
const View = ({ propertys, loading, error, data, onLoad, RenderLoading, RenderError, RenderList }) => (
  <div>
    <NoticeBar
      mode="closable"
      icon={<Icon type="check-circle-o" size="xxs" />}
    >
      以下是你的過往配對!
        </NoticeBar>
        <Button onClick={()=> onLoad( 1000 ) } />
    <List renderHeader={() => "你搜尋嘅樓盤"} className="my-list" />
      <section>
        {do {
        if (loading) {
          <RenderLoading />
        } else if (error) {
          <RenderError error={error} />
        } else {
          <RenderList src={data} />
        }
        }}
    </section>
    </div>
    );

View.propTypes = {
    };

View.defaultProps = {
  RenderLoading: Loading,
  RenderError: Error,
  RenderList : Records
};

export default View;