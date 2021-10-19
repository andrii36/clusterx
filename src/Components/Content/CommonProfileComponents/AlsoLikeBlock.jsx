import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../RealEstatePage/RealEstateProfile.module.css';

class AlsoLikeBlock extends React.Component {

    render() {
        return (
            <div className={styles.alsoLike}>
                {this.props.mbiList &&
                <NavLink to={`/transport-profile/${this.props.mbiList[0]._id}`}>
                    <div>
                        <div><img src={this.props.mbiList[0].image} /></div>
                        <div>{this.props.mbiList[0].title}</div>
                    </div>
                </NavLink>}
                {this.props.mbiList &&
                <NavLink to={`/transport-profile/${this.props.mbiList[1]._id}`}>
                    <div>
                        <div><img src={this.props.mbiList[1].image} /></div>
                        <div>{this.props.mbiList[1].title}</div>
                    </div>
                </NavLink>}
                {this.props.mbiList &&
                <NavLink to={`/transport-profile/${this.props.mbiList[2]._id}`}>
                    <div>
                        <div><img src={this.props.mbiList[2].image} /></div>
                        <div>{this.props.mbiList[2].title}</div>
                    </div>
                </NavLink>}
                {this.props.mbiList &&
                <NavLink to={`/transport-profile/${this.props.mbiList[3]._id}`}>
                    <div>
                        <div><img src={this.props.mbiList[3].image} /></div>
                        <div>{this.props.mbiList[3].title}</div>
                    </div>
                </NavLink>}
                {this.props.mbiList &&
                <NavLink to={`/transport-profile/${this.props.mbiList[4]._id}`}>
                    <div>
                        <div><img src={this.props.mbiList[4].image} /></div>
                        <div>{this.props.mbiList[4].title}</div>
                    </div>
                </NavLink>}
            </div>
        )
    }
}
export default AlsoLikeBlock;