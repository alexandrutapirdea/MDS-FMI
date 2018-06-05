import React from 'react';
import { Menu, Icon } from 'antd';
import 'antd/lib/menu/style/css';
import 'antd/lib/icon/style/css';
import './navbarStyle.css';
import * as routes from "../../constants/routes";
import { Link } from 'react-router-dom';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class testNav extends React.Component {
    state = {
        current: 'mail',
    };
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
    render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="mail">
                    <Icon type="login" />Sign In
                    <Link to={routes.SIGN_IN}/>
                </Menu.Item>
                <SubMenu title={<span><Icon type="setting" />Resurse Utile</span>}>
                    <MenuItemGroup title="Invatare si evaluare">
                        <Menu.Item key="setting:1">Examene</Menu.Item>
                        <Menu.Item key="setting:2">Orar</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="Informatii">
                        <Menu.Item key="setting:3">Secretariat</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <Menu.Item key="alipay">
                    <a href="http://as-mi.ro/" target="_blank" rel="noopener noreferrer">ASMI</a>
                </Menu.Item>
            </Menu>
        );
    }
}

