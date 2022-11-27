import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Header, Icon, Segment } from 'semantic-ui-react'

export default function NotFound() {
    return (
        <Segment placeholder>
            <Header icon>
                <Icon name='search' />
                Uhhh, yea about that...we couldn't find it. Sorry my guy.
            </Header>
            <Segment.Inline>
                <Button as={Link} to='/activities' primary>
                    Return to the activities page
                </Button>
            </Segment.Inline>
        </Segment>
    )
}