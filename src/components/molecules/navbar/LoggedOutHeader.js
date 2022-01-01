import React, {useState} from "react";
import {
    ThemeProvider,
    Div,
    Row,
    Col,
    Container,
    DefaultTheme,
    Image,
    Button,
    Icon,
    Text,
    Modal,
    Input
} from "react-atomize";
import {NavLink, useRouteMatch} from "react-router-dom";
import {Formik} from 'formik';
import * as Yup from 'yup';
import PhoneAuth from "../modals/modalComponents/PhoneAuth";
import styles from "../../../styles/style";
import Login from '../../pageComponents/login/Login';
import Register from "../../pageComponents/login/Register";
import ProfileInputs from "../modals/modalComponents/ProfileInputs";
import logo from '../../../assets/images/god.png';


const theme = {
    ...DefaultTheme,
    grid: {
        ...DefaultTheme.grid,
        colCount: 12,
        gutterWidth: 0
    }
};
export default function LoggedOutHeader() {
    const { url } = useRouteMatch()

    return (
        <ThemeProvider theme={theme}>
            <Row
            m={{t:"1.5rem"}}>
                <Col size={{xs: 0, lg: 1}}>

                </Col>
                <Col size={{xs: 1, lg: 1}}>
                    <NavLink to=""><Image
                        src={logo}
                        h="3rem"
                        w="auto"
                    />
                    </NavLink>
                </Col>

                <Col size={{xs: 2, lg: 5}}>

                </Col>
                <Col size={{xs: 1, lg: 1}}>
                    <NavLink to={`${url}/about_us`}
                             style={{textDecoration: 'none'}}>
                        <Button
                            h="2.5rem"
                            p={{x: "1rem"}}
                            textSize="body"
                            textColor="gray900"
                            bg="white"
                            fontFamily="primary"
                            m={{r: "0.5rem"}}
                        >
                            About
                        </Button>
                    </NavLink>
                </Col>
               

                <Col size={{xs: 1, lg: 1}}>
                    <NavLink to={`${url}/contact_us`}><Button
                        h="2.5rem"
                        p={{x: "1rem"}}
                        textSize="body"
                        textColor="gray900"
                        bg="white"
                        fontFamily="primary"
                        m={{r: "0.5rem"}}
                    >
                        Skin
                    </Button></NavLink>
                </Col>
                <Col size={{xs: 1, lg: 2}}>
                    <NavLink to={`${url}/login`}>
                        <Button
                        bg="white"
                        textColor="gray900"
                        p={{r: "3rem", l: "3rem"}}
                        shadow="1"
                        hoverShadow="2"
                        fontFamily="primary"
                    >
                        Connect Wallet
                    </Button></NavLink>
                </Col>
                <Col size={{xs: 1, lg: 1}}>

                </Col>
            </Row>

        </ThemeProvider>
    );
}

