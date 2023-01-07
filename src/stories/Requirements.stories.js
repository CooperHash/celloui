import React from 'react'
import { storiesOf } from '@storybook/react'

import { Requirements } from '../components/Requirements'
import { ToggleButton } from '../components/ToggleButton'

const stories = storiesOf('App Test', module)

stories.add('App', () => {
    return (<Requirements/>)
})


