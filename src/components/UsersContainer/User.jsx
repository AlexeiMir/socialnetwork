import React from 'react';
import style from './users.module.css';
import userPhoto from './../../assets/images/user.png'
import {NavLink} from 'react-router-dom';
import {Row, Col, Button} from 'antd';
import 'antd/dist/antd.css';


let User = ({user, followingInProgress, unfollow, follow}) => {

    return (<div>
            <Row justify="space-between" align="middle" gutter={[8, 24]}>
                <Col span={6}>
                    <NavLink to={'/profile/' + user.id}>
                        <Row>
                            <Col span={24} offset={4}>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                     className={style.userPhoto}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24} offset={8}>
                                <div> {user.name} </div>
                                <div> {user.status} </div>
                            </Col>
                        </Row>
                    </NavLink>
                </Col>

                <Col span={6}>
                    <div> "user.location.country"</div>
                    <div> "user.location.city"</div>
                </Col>
                <Col span={6}>
                    {user.followed ?
                        <Button type="primary" disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    unfollow(user.id);
                                }}>Unfollow</Button> :
                        <Button type="primary" disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    follow(user.id)

                                }}>Follow</Button>}
                </Col>
            </Row>
        </div>
    )

}


export default User;






