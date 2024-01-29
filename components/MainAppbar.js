import React from 'react'
import { Appbar } from 'react-native-paper'

export default function MainAppbar({ title }) {
    return (
        <Appbar.Header mode="center-aligned" elevated={true}>
            <Appbar.Content title={title} />
        </Appbar.Header>
    )
}