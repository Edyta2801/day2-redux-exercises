import React from 'react'

import { connect } from 'react-redux'
import { fetchUsersAsyncAction } from './state/randomUsers';

class RandomUsers extends React.Component {
    componentDidMount() {
        this.props._fetchUsersAsyncAction(
            'http"//randomuser.me/api'
        )

    }

    render() {
        return (
            <div>
                {
                    this._isError ?
                        'Sorry, an error!'
                        :
                        this.isFetching ?
                            'Loading...'
                            :
                            this._users.map(
                                user => <div>{user.name.first}</div>
                            )
                }
            </div>
        )
    }
}


const mapStateToProps = state => ({
    _users: state.randomUsers.users,
    _isError: state.randomUsers.isError,
    _isFetching: state.randomUsers.isError,
})

const mapDispatchToProps = dispatch => ({
    _fetchUsersAsyncAction: url => dispatch(fetchUsersAsyncAction(url))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RandomUsers)