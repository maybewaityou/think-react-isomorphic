/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import React from 'react';
import styled from 'styled-components';

import { IViewModelProps } from '../view-model/index';

export default (props: Readonly<IViewModelProps>) => (
  <div style={styles.container}>
    <div>
      <label htmlFor="userName" style={styles.labelDes}>用户名: </label>
      <input id="userName" type="text" value={props.userName} style={styles.input} onChange={props.handleUserNameChange} />
    </div>
    <div>
      <label htmlFor="password" style={styles.labelDes}>密码: </label>
      <input id="password" type="text" value={props.password} style={styles.input} onChange={props.handlePasswordChange} />
    </div>
    <button onClick={props.handleLoginClick}>登录</button>
  </div>
);

const styles = {
  container: {
    flex: 1,
  },
  labelDes: {
    width: '68px',
  },
  input: {
    width: '150px',
  },
  password: {
    marginLeft: '20px',
  },

};
