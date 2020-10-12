import React, { useState } from 'react'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'

export default function NewsArticle({ data }) {

    const [open, setOpen] = useState(false);
    return (
        <Card className="mb-3">
            <Card.Body>
                <div className="d-flex justify-content-between ">
                    <div>
                        <Card.Title>
                            {data.title} - <span className="text-muted 
                        font-weight-light"></span>
                        </Card.Title>
                        <Card.Subtitle className="text-muted mb-2">
                            {data.author}
                        </Card.Subtitle>
                       
                        <Badge variant="secondary">{data.publishedAt}</Badge>
                        <div style={{ wordBreak: 'break-all' }}>
                            <ReactMarkdown source={data.source.name} />
                        </div>
                        
                    </div>

                </div>
                <Card.Text>
                    <Button onClick={() =>
                        setOpen(prevOpen => !prevOpen)
                    } variant="primary">
                        {open ? 'Hide Deatails' : 'View Details'}
                    </Button>
                </Card.Text>
                <Collapse in={open}>
                    <div className="mt-4">
                        <ReactMarkdown source={data.description} />
                    </div>
                </Collapse>
            </Card.Body>

        </Card>
    )
}