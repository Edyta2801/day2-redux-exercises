import React from 'react'
import { connect } from 'react-redux'

const RandomUsers = (props) => (
    <div>
        {
            props._isError ?
                'Sorry, an error!'
                :
                props.isFetching ?
                    'Loading...'
                    :


                    props._users.map(
                        user => <div>{user.name.first}</div>
                    )
        }
    </div>
)
const mapStateToProps = state => ({
    _users: state.randomUsers.users,
    _isError: state.randomUsers.isError,
    _isFetching: state.randomUsers.isError,
})

const mapDispatchToProps = dispatch => ({})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RandomUsers)