import React from "react"

<Container style={{ marginTop: "40px", textAlign: "center" }}>
    <h2>Browse stores in Houston</h2>
    <Row style={{ borderBottom: "1px solid #E8E9EB" }}>
        <Col xs={1}></Col> {/* Empty column for spacing */}
        <Col xs={10}>
            <Row style={{ display: "flex", alignItems: "center" }}>
                <Col xs={2}>
                    <Image src="[ALDI IMG SRC]" roundedCircle />
                </Col>
                <Col xs={10}>
                    <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                    <p>Delivery * Pickup</p>
                </Col>
            </Row>
        </Col>
        <Col xs={1}></Col> {/* Empty column for spacing */}
    </Row>

    <Row style={{ borderBottom: "1px solid #E8E9EB" }}>
        <Col xs={1}></Col> {/* Empty column for spacing */}
        <Col xs={10}>
            <Row style={{ display: "flex", alignItems: "center" }}>
                <Col xs={2}>
                    <Image src="[Sprouts Farmers Market IMG SRC]" roundedCircle />
                </Col>
                <Col xs={10}>
                    <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                    <p>Delivery * Pickup</p>
                </Col>
            </Row>
        </Col>
        <Col xs={1}></Col> {/* Empty column for spacing */}
    </Row>

    <Row style={{ borderBottom: "1px solid #E8E9EB" }}>
        <Col xs={1}></Col> {/* Empty column for spacing */}
        <Col xs={10}>
            <Row style={{ display: "flex", alignItems: "center" }}>
                <Col xs={2}>
                    <Image src="[Kroger IMG SRC]" roundedCircle />
                </Col>
                <Col xs={10}>
                    <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                    <p>Delivery</p>
                </Col>
            </Row>
        </Col>
        <Col xs={1}></Col> {/* Empty column for spacing */}
    </Row>
</Container>
