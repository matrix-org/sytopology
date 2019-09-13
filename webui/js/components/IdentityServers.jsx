/*
Copyright 2019 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from 'react';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { IDENTITY_SERVER_UI } from '../reducers/ui-constants';
import AccordionToggle from '../containers/AccordionToggle';
import InlineError from './InlineError';
import ToggleButton from './ToggleButton';

const validator = /^[0-9a-zA-Z.-:]+$/;

class IdentityServers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailEnabled: false,

            smtpHost: undefined,
            smpPort: undefined,
            smtpUser: undefined,
            smtpPassword: undefined,
            notifFrom: undefined,
            tlsEnabled: false,

            emailUseIS: false,
            emailIS: undefined,


            msisdnEnabled: false,
            msisdnIS: undefined,
        }
    }

    toggleEmailEnabled() {
        this.setState({
            emailEnabled: !this.state.emailEnabled,
        });
    }
    setSMTPHost(host) {
        this.setState({
            smtpHost: host,
        });
    }

    smtpHostValid() {
        validator.test(this.state.smtpHost);
    }

    setSMTPPort(smtpPort) {
        this.setState({
            smtpPort
        });
    }

    smtpPortValid() {
        port = parseInt(self.state.port);
        return Number.isInteger(port) && 0 <= port <= 65535;
    }

    setSMTPUser(smtpUser) {
        this.setState({
            smtpUser,
        });
    }

    setSMTPPassword(smtpPassword) {
        this.setState({
            smtpPassword,
        });
    }

    setNotifFrom(notifFrom) {
        this.setState({
            notifFrom,
        });
    }

    toggleTLSEnabled() {
        this.setState({
            tlsEnabeld: !this.state.tlsEnabled,
        });
    }

    toggleEmailUseIS(emailUseIS) {
        this.setState({
            emailUseIS,
        });
    }

    setEmailIS(emailIS) {
        this.setState({
            emailIS,
        });
    }

    emailISValid() {
        return validator.test(this.state.emailIS);
    }

    toggleMsisdnEnabled() {
        this.setState({
            msisdnEnabled: !this.state.msisdnEnabled,
        });
    }

    setMsisdnIS(msisdnIS) {
        this.setState({
            msisdnIS,
        });
    }

    msisdnISValid() {
        return validator.test(this.state.msisdnIS);
    }

    render() {
        return <Card>
            <AccordionToggle as={Card.Header} eventKey={IDENTITY_SERVER_UI}>
                User account recovery
            </AccordionToggle>
            <Accordion.Collapse eventKey={IDENTITY_SERVER_UI}>
                <Card.Body>
                    <p>
                        Users can add email addresses and phone numbers to their
                        accounts for account recovery.
                    </p>
                    <Accordion>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="email" onClick={this.toggleEmailEnabled.bind(this)}>
                                <input
                                    checked={this.state.emailEnabled}
                                    type="checkbox"
                                    style={{ marginBottom: 0 }}
                                    onChange={() => this}
                                />
                                Recovery via email
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="email">
                                <Card.Body>
                                    blah blah
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Accordion>
                        <Card>
                            <Accordion.Toggle
                                as={Card.Header}
                                eventKey="msisdn"
                            >
                                <input
                                    checked={this.state.msisdnEnabled}
                                    type="checkbox"
                                    style={{ marginBottom: 0 }}
                                    onChange={() => undefined}
                                />
                                Recovery via sms
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="msisdn">
                                <Card.Body>
                                    blah blah
                            </Card.Body>
                            </Accordion.Collapse>

                        </Card>
                    </Accordion>
                    <ToggleButton onClick={() => console.log("banter")} eventKey={IDENTITY_SERVER_UI}>Banter</ToggleButton>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    }
}

export default IdentityServers;