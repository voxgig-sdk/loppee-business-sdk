import { BaseFeature } from './feature/base/BaseFeature';
declare const FEATURE_PLUGINS: Record<string, any[]>;
declare class Config {
    makeFeature(this: any, fn: string): BaseFeature;
    hasFeature(this: any, fn: string): boolean;
    main: {
        name: string;
        slug: string;
        version: string;
        target: string;
    };
    feature: {
        ratelimit: {
            options: {
                active: boolean;
                burst: number;
                rate: number;
            };
            optspec: {
                now: string;
                sleep: string;
            };
            strict: boolean;
            transport: string;
        };
        retry: {
            options: {
                active: boolean;
                factor: number;
                maxDelay: number;
                minDelay: number;
                retries: number;
                statuses: number[];
            };
            optspec: {
                jitter: string;
                sleep: string;
            };
            strict: boolean;
            transport: string;
        };
        test: {
            options: {
                active: boolean;
            };
            optspec: {
                entity: string;
                net: string;
            };
            strict: boolean;
            transport: string;
        };
        timeout: {
            options: {
                active: boolean;
                ms: number;
            };
            optspec: {
                clearTimer: string;
                now: string;
                setTimer: string;
            };
            strict: boolean;
            transport: string;
        };
    };
    options: {
        base: string;
        auth: {
            prefix: string;
            name: string;
        };
        headers: {
            "content-type": string;
        };
        entity: {
            agent_access: {};
            agent_capability: {};
            agent_connection_test: {};
            agent_integration: {};
            agent_monitoring: {};
            agent_openapi: {};
            agent_policy: {};
            anonymous_location_proof_revocation: {};
            business_application: {};
            business_claim: {};
            business_deal: {};
            business_index: {};
            business_owner: {};
            business_review: {};
            chat_attachment: {};
            chat_attachment_url: {};
            claim_verification_send: {};
            claim_verification_verify: {};
            commercial_click: {};
            contact_recorded: {};
            conversation: {};
            conversation_close: {};
            conversation_report: {};
            conversation_workflow: {};
            create_agent_api_key: {};
            customer: {};
            customer_account: {};
            customer_location_proof_revocation: {};
            destination_address_suggestion: {};
            destination_location_proof: {};
            domain_trust_card: {};
            geo_context: {};
            health: {};
            job_application: {};
            job_resume_signed_url: {};
            location_handoff: {};
            message: {};
            moderated_action: {};
            open_api_document: {};
            operation: {};
            owner_notification: {};
            owner_notification_setting: {};
            owner_webhook_endpoint: {};
            owner_webhook_registration: {};
            pricing: {};
            promote_verified_transaction: {};
            public_content: {};
            recommend: {};
            review: {};
            revoke: {};
            save_business: {};
            saved_business: {};
            saved_location: {};
            search: {};
            suggest: {};
            support_internal_note: {};
            support_workflow: {};
            taxonomy_suggestion: {};
            trust_card: {};
            unsave_business: {};
            update_agent_billing_account: {};
            withdraw_job_application: {};
        };
    };
    entity: {
        agent_access: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
            } | {
                name: string;
                title: string;
                type: string;
                req?: undefined;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: {
                                agent_name: string;
                                agent_type: string;
                                callback_url: string;
                                compliance_notes: string;
                                data_needs: string;
                                developer_email: string;
                                operating_states: string;
                                organization_name: string;
                                requested_actions: string;
                                safety_contact: string;
                                target_categories: string;
                                use_case: string;
                                website: string;
                            };
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        agent_capability: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
            })[];
            name: string;
            op: {
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        agent_connection_test: {
            fields: {
                name: string;
                title: string;
                type: string;
                short: string;
            }[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: {
                                key: string;
                            };
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                        };
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        agent_integration: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                format: string;
            })[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        agent_monitoring: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                format: string;
            })[];
            name: string;
            op: {
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        agent_openapi: {
            fields: {
                name: string;
                title: string;
                type: string;
                req: boolean;
            }[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        agent_policy: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
            } | {
                name: string;
                title: string;
                type: string;
                req?: undefined;
            })[];
            name: string;
            op: {
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        anonymous_location_proof_revocation: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                format: string;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: {
                                accuracy_meters: string;
                                captured_at: string;
                                latitude: string;
                                longitude: string;
                            };
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        business_application: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                op: {
                    create: {
                        type: string;
                    };
                };
            } | {
                name: string;
                title: string;
                type: (string | string[])[];
                req: boolean;
                op: {
                    create: {
                        type: string;
                    };
                };
            } | {
                name: string;
                title: string;
                type: string;
                req?: undefined;
                op?: undefined;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: {
                                application: string;
                                business_id: string;
                                claim_id: string;
                                files: string;
                                listing_id: string;
                            };
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        business_claim: {
            fields: ({
                name: string;
                title: string;
                type: (string | string[])[];
                req: boolean;
                op: {
                    create: {
                        type: string;
                    };
                };
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req?: undefined;
                op?: undefined;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                op?: undefined;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: (string | string[])[];
                req: boolean;
                op?: undefined;
                short?: undefined;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: {
                                business_id: string;
                                category: string;
                                city: string;
                                claimant_email: string;
                                claimant_name: string;
                                claimant_relationship: string;
                                display_name: string;
                                listing_id: string;
                                notes: string;
                                phone: string;
                                source: string;
                                source_type: string;
                                source_url: string;
                                state: string;
                                website: string;
                            };
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        business_deal: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
            } | {
                name: string;
                title: string;
                type: (string | string[])[];
                req: boolean;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                business_id: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        business_index: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req?: undefined;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: (string | string[])[];
                req: boolean;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: (string | string[])[];
                short: string;
                req?: undefined;
            })[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            query: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                        };
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        business_owner: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                op?: undefined;
                short?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                op: {
                    update: {
                        type: string;
                    };
                    create?: undefined;
                };
                short: string;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req?: undefined;
                op?: undefined;
                short?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: (string | string[])[];
                req?: undefined;
                op?: undefined;
                short?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                op: {
                    create: {
                        type: string;
                        req?: undefined;
                    };
                    update: {
                        type: string;
                    };
                };
                short?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                op: {
                    create: {
                        req: boolean;
                        type: string;
                    };
                    update?: undefined;
                };
                req?: undefined;
                short?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
                op?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: (string | string[])[];
                req: boolean;
                op?: undefined;
                short?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                format: string;
                op?: undefined;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: (string | string[])[];
                req: boolean;
                format: string;
                op?: undefined;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
                op?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                op: {
                    create: {
                        type: string;
                        req?: undefined;
                    };
                    update?: undefined;
                };
                short?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
                format: string;
                op?: undefined;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: ({
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: {
                                actions: string;
                                url?: undefined;
                                body?: undefined;
                                client_message_id?: undefined;
                                business_id?: undefined;
                                name?: undefined;
                                acknowledge_data_effects?: undefined;
                                confirmation?: undefined;
                                reason?: undefined;
                                period?: undefined;
                                radius_miles?: undefined;
                                installation_id?: undefined;
                                platform?: undefined;
                                push_token?: undefined;
                            };
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: {
                                url: string;
                                actions?: undefined;
                                body?: undefined;
                                client_message_id?: undefined;
                                business_id?: undefined;
                                name?: undefined;
                                acknowledge_data_effects?: undefined;
                                confirmation?: undefined;
                                reason?: undefined;
                                period?: undefined;
                                radius_miles?: undefined;
                                installation_id?: undefined;
                                platform?: undefined;
                                push_token?: undefined;
                            };
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                id: string;
                                interaction_id?: undefined;
                                conversation_id?: undefined;
                                intent_id?: undefined;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            $action: string;
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                interaction_id: string;
                                id?: undefined;
                                conversation_id?: undefined;
                                intent_id?: undefined;
                            };
                        };
                        transform: {
                            req: {
                                body: string;
                                client_message_id: string;
                                actions?: undefined;
                                url?: undefined;
                                business_id?: undefined;
                                name?: undefined;
                                acknowledge_data_effects?: undefined;
                                confirmation?: undefined;
                                reason?: undefined;
                                period?: undefined;
                                radius_miles?: undefined;
                                installation_id?: undefined;
                                platform?: undefined;
                                push_token?: undefined;
                            };
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                conversation_id: string;
                                id?: undefined;
                                interaction_id?: undefined;
                                intent_id?: undefined;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                intent_id: string;
                                id?: undefined;
                                interaction_id?: undefined;
                                conversation_id?: undefined;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params?: undefined;
                        };
                        select: {
                            exist?: undefined;
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: {
                                actions: string;
                                business_id: string;
                                name: string;
                                url?: undefined;
                                body?: undefined;
                                client_message_id?: undefined;
                                acknowledge_data_effects?: undefined;
                                confirmation?: undefined;
                                reason?: undefined;
                                period?: undefined;
                                radius_miles?: undefined;
                                installation_id?: undefined;
                                platform?: undefined;
                                push_token?: undefined;
                            };
                            res: string;
                        };
                        args: {
                            params?: undefined;
                        };
                        select: {
                            exist?: undefined;
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: {
                                acknowledge_data_effects: string;
                                confirmation: string;
                                reason: string;
                                actions?: undefined;
                                url?: undefined;
                                body?: undefined;
                                client_message_id?: undefined;
                                business_id?: undefined;
                                name?: undefined;
                                period?: undefined;
                                radius_miles?: undefined;
                                installation_id?: undefined;
                                platform?: undefined;
                                push_token?: undefined;
                            };
                            res: string;
                        };
                        args: {
                            params?: undefined;
                        };
                        select: {
                            exist?: undefined;
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: {
                                business_id: string;
                                period: string;
                                radius_miles: string;
                                actions?: undefined;
                                url?: undefined;
                                body?: undefined;
                                client_message_id?: undefined;
                                name?: undefined;
                                acknowledge_data_effects?: undefined;
                                confirmation?: undefined;
                                reason?: undefined;
                                installation_id?: undefined;
                                platform?: undefined;
                                push_token?: undefined;
                            };
                            res: string;
                        };
                        args: {
                            params?: undefined;
                        };
                        select: {
                            exist?: undefined;
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: {
                                installation_id: string;
                                platform: string;
                                push_token: string;
                                actions?: undefined;
                                url?: undefined;
                                body?: undefined;
                                client_message_id?: undefined;
                                business_id?: undefined;
                                name?: undefined;
                                acknowledge_data_effects?: undefined;
                                confirmation?: undefined;
                                reason?: undefined;
                                period?: undefined;
                                radius_miles?: undefined;
                            };
                            res: string;
                        };
                        args: {
                            params?: undefined;
                        };
                        select: {
                            exist?: undefined;
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: {
                                installation_id: string;
                                actions?: undefined;
                                url?: undefined;
                                body?: undefined;
                                client_message_id?: undefined;
                                business_id?: undefined;
                                name?: undefined;
                                acknowledge_data_effects?: undefined;
                                confirmation?: undefined;
                                reason?: undefined;
                                period?: undefined;
                                radius_miles?: undefined;
                                platform?: undefined;
                                push_token?: undefined;
                            };
                            res: string;
                        };
                        args: {
                            params?: undefined;
                        };
                        select: {
                            exist?: undefined;
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    })[];
                };
                update: {
                    input: string;
                    name: string;
                    points: ({
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                intent_id: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params?: undefined;
                        };
                        select: {
                            exist?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    })[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        business_review: {
            fields: {
                name: string;
                title: string;
                type: string;
            }[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                business_id: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                            query: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        chat_attachment: {
            fields: {
                name: string;
                title: string;
                type: string;
                req: boolean;
            }[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: ({
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: {
                                content_type: string;
                                data_base64: string;
                                file_name: string;
                                size_bytes: string;
                            };
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                interaction_id: string;
                                conversation_id?: undefined;
                            };
                        };
                        transform: {
                            req: {
                                content_type: string;
                                data_base64: string;
                                file_name: string;
                                size_bytes: string;
                            };
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                conversation_id: string;
                                interaction_id?: undefined;
                            };
                        };
                        transform: {
                            req: {
                                content_type: string;
                                data_base64: string;
                                file_name: string;
                                size_bytes: string;
                            };
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    })[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        chat_attachment_url: {
            fields: {
                name: string;
                title: string;
                type: string;
                req: boolean;
            }[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: ({
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                interaction_id: string;
                                conversation_id?: undefined;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                conversation_id: string;
                                interaction_id?: undefined;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    })[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        claim_verification_send: {
            fields: ({
                name: string;
                title: string;
                type: string;
                short: string;
                format: string;
                req?: undefined;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                op: {
                    create: {
                        type: string;
                    };
                };
                short?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short?: undefined;
                format?: undefined;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short?: undefined;
                format?: undefined;
                req?: undefined;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                format?: undefined;
                req?: undefined;
                op?: undefined;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: {
                                channel: string;
                                claim_id: string;
                                request_id: string;
                            };
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        claim_verification_verify: {
            fields: ({
                name: string;
                title: string;
                type: (string | string[])[];
                req: boolean;
                short?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                format: string;
                req?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req?: undefined;
                short?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short?: undefined;
                format?: undefined;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: {
                                challenge_id: string;
                                channel: string;
                                claim_id: string;
                                code: string;
                            };
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        commercial_click: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
            } | {
                name: string;
                title: string;
                type: (string | string[])[];
                req?: undefined;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req?: undefined;
                short?: undefined;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: {
                                action_type: string;
                                ad_receipt: string;
                                business_id: string;
                                category: string;
                                city: string;
                                commercial_status: string;
                                directory_listing_id: string;
                                display_name: string;
                                listing_id: string;
                                metadata: string;
                                page_path: string;
                                referrer: string;
                                source_type: string;
                                state: string;
                                surface: string;
                                target_url: string;
                            };
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        contact_recorded: {
            fields: {
                name: string;
                title: string;
                type: string;
                req: boolean;
            }[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: {
                                business_id: string;
                            };
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        conversation: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req?: undefined;
                short?: undefined;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: {
                                account_id: string;
                                conversation_id: string;
                                cursor: string;
                                limit: string;
                            };
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        conversation_close: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                format: string;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req?: undefined;
                format?: undefined;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                conversation_id: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        conversation_report: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: ({
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                conversation_id: string;
                                interaction_id?: undefined;
                            };
                        };
                        transform: {
                            req: {
                                detail: string;
                                reason: string;
                            };
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                interaction_id: string;
                                conversation_id?: undefined;
                            };
                        };
                        transform: {
                            req: {
                                detail: string;
                                reason: string;
                            };
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    })[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        conversation_workflow: {
            fields: {
                name: string;
                title: string;
                type: string;
            }[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                interaction_id: string;
                            };
                        };
                        transform: {
                            req: {
                                priority: string;
                                status: string;
                            };
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        create_agent_api_key: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
            } | {
                name: string;
                title: string;
                type: string;
                req?: undefined;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        customer: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req?: undefined;
                op?: undefined;
                short?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: (string | string[])[];
                req: boolean;
                op: {
                    create: {
                        type: string;
                    };
                };
                short: string;
                format: string;
            } | {
                name: string;
                title: string;
                type: (string | string[])[];
                req: boolean;
                op: {
                    create: {
                        type: string;
                    };
                };
                short?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: (string | string[])[];
                req: boolean;
                format: string;
                op?: undefined;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                format: string;
                op?: undefined;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                op: {
                    create: {
                        type: string;
                    };
                };
                short?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                op?: undefined;
                short?: undefined;
                format?: undefined;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: {
                                auth_provider: string;
                                avatar_url: string;
                                city: string;
                                full_name: string;
                                phone: string;
                                search_category: string;
                                service_need: string;
                                state: string;
                            };
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        customer_account: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                format?: undefined;
                op?: undefined;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                format: string;
                op?: undefined;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: (string | string[])[];
                req: boolean;
                format?: undefined;
                op?: undefined;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                op: {
                    create: {
                        type: string;
                    };
                };
                short: string;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: (string | string[])[];
                req: boolean;
                format: string;
                op?: undefined;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
                format?: undefined;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
                format?: undefined;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req?: undefined;
                format?: undefined;
                op?: undefined;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                op: {
                    create: {
                        type: string;
                    };
                };
                format?: undefined;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
                format: string;
                op?: undefined;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: ({
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                handoff_id: string;
                            };
                        };
                        transform: {
                            req: {
                                accuracy_meters: string;
                                agent_key_id: string;
                                assertion: string;
                                capture_source: string;
                                captured_at: string;
                                challenge: string;
                                challenge_id: string;
                                connection_id: string;
                                installation_id: string;
                                key_id: string;
                                latitude: string;
                                longitude: string;
                                oauth_grant_id: string;
                                use_mode: string;
                                request_mode?: undefined;
                                attestation?: undefined;
                                url?: undefined;
                                body?: undefined;
                                client_message_id?: undefined;
                                continuation?: undefined;
                                location?: undefined;
                                messages?: undefined;
                                acknowledge_data_effects?: undefined;
                                confirmation?: undefined;
                                reason?: undefined;
                                platform?: undefined;
                                push_token?: undefined;
                                enabled?: undefined;
                            };
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                handoff_id: string;
                            };
                        };
                        transform: {
                            req: {
                                agent_key_id: string;
                                assertion: string;
                                challenge: string;
                                challenge_id: string;
                                connection_id: string;
                                installation_id: string;
                                key_id: string;
                                oauth_grant_id: string;
                                request_mode: string;
                                accuracy_meters?: undefined;
                                capture_source?: undefined;
                                captured_at?: undefined;
                                latitude?: undefined;
                                longitude?: undefined;
                                use_mode?: undefined;
                                attestation?: undefined;
                                url?: undefined;
                                body?: undefined;
                                client_message_id?: undefined;
                                continuation?: undefined;
                                location?: undefined;
                                messages?: undefined;
                                acknowledge_data_effects?: undefined;
                                confirmation?: undefined;
                                reason?: undefined;
                                platform?: undefined;
                                push_token?: undefined;
                                enabled?: undefined;
                            };
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            params?: undefined;
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: {
                                attestation: string;
                                challenge: string;
                                challenge_id: string;
                                installation_id: string;
                                key_id: string;
                                accuracy_meters?: undefined;
                                agent_key_id?: undefined;
                                assertion?: undefined;
                                capture_source?: undefined;
                                captured_at?: undefined;
                                connection_id?: undefined;
                                latitude?: undefined;
                                longitude?: undefined;
                                oauth_grant_id?: undefined;
                                use_mode?: undefined;
                                request_mode?: undefined;
                                url?: undefined;
                                body?: undefined;
                                client_message_id?: undefined;
                                continuation?: undefined;
                                location?: undefined;
                                messages?: undefined;
                                acknowledge_data_effects?: undefined;
                                confirmation?: undefined;
                                reason?: undefined;
                                platform?: undefined;
                                push_token?: undefined;
                                enabled?: undefined;
                            };
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            params?: undefined;
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            header?: undefined;
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: {
                                url: string;
                                accuracy_meters?: undefined;
                                agent_key_id?: undefined;
                                assertion?: undefined;
                                capture_source?: undefined;
                                captured_at?: undefined;
                                challenge?: undefined;
                                challenge_id?: undefined;
                                connection_id?: undefined;
                                installation_id?: undefined;
                                key_id?: undefined;
                                latitude?: undefined;
                                longitude?: undefined;
                                oauth_grant_id?: undefined;
                                use_mode?: undefined;
                                request_mode?: undefined;
                                attestation?: undefined;
                                body?: undefined;
                                client_message_id?: undefined;
                                continuation?: undefined;
                                location?: undefined;
                                messages?: undefined;
                                acknowledge_data_effects?: undefined;
                                confirmation?: undefined;
                                reason?: undefined;
                                platform?: undefined;
                                push_token?: undefined;
                                enabled?: undefined;
                            };
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            header?: undefined;
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: {
                                body: string;
                                client_message_id: string;
                                accuracy_meters?: undefined;
                                agent_key_id?: undefined;
                                assertion?: undefined;
                                capture_source?: undefined;
                                captured_at?: undefined;
                                challenge?: undefined;
                                challenge_id?: undefined;
                                connection_id?: undefined;
                                installation_id?: undefined;
                                key_id?: undefined;
                                latitude?: undefined;
                                longitude?: undefined;
                                oauth_grant_id?: undefined;
                                use_mode?: undefined;
                                request_mode?: undefined;
                                attestation?: undefined;
                                url?: undefined;
                                continuation?: undefined;
                                location?: undefined;
                                messages?: undefined;
                                acknowledge_data_effects?: undefined;
                                confirmation?: undefined;
                                reason?: undefined;
                                platform?: undefined;
                                push_token?: undefined;
                                enabled?: undefined;
                            };
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            header?: undefined;
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header?: undefined;
                            params?: undefined;
                        };
                        select: {
                            exist?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: {
                                continuation: string;
                                location: string;
                                messages: string;
                                accuracy_meters?: undefined;
                                agent_key_id?: undefined;
                                assertion?: undefined;
                                capture_source?: undefined;
                                captured_at?: undefined;
                                challenge?: undefined;
                                challenge_id?: undefined;
                                connection_id?: undefined;
                                installation_id?: undefined;
                                key_id?: undefined;
                                latitude?: undefined;
                                longitude?: undefined;
                                oauth_grant_id?: undefined;
                                use_mode?: undefined;
                                request_mode?: undefined;
                                attestation?: undefined;
                                url?: undefined;
                                body?: undefined;
                                client_message_id?: undefined;
                                acknowledge_data_effects?: undefined;
                                confirmation?: undefined;
                                reason?: undefined;
                                platform?: undefined;
                                push_token?: undefined;
                                enabled?: undefined;
                            };
                            res: string;
                        };
                        args: {
                            header?: undefined;
                            params?: undefined;
                        };
                        select: {
                            exist?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: {
                                acknowledge_data_effects: string;
                                confirmation: string;
                                reason: string;
                                accuracy_meters?: undefined;
                                agent_key_id?: undefined;
                                assertion?: undefined;
                                capture_source?: undefined;
                                captured_at?: undefined;
                                challenge?: undefined;
                                challenge_id?: undefined;
                                connection_id?: undefined;
                                installation_id?: undefined;
                                key_id?: undefined;
                                latitude?: undefined;
                                longitude?: undefined;
                                oauth_grant_id?: undefined;
                                use_mode?: undefined;
                                request_mode?: undefined;
                                attestation?: undefined;
                                url?: undefined;
                                body?: undefined;
                                client_message_id?: undefined;
                                continuation?: undefined;
                                location?: undefined;
                                messages?: undefined;
                                platform?: undefined;
                                push_token?: undefined;
                                enabled?: undefined;
                            };
                            res: string;
                        };
                        args: {
                            header?: undefined;
                            params?: undefined;
                        };
                        select: {
                            exist?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: {
                                installation_id: string;
                                platform: string;
                                push_token: string;
                                accuracy_meters?: undefined;
                                agent_key_id?: undefined;
                                assertion?: undefined;
                                capture_source?: undefined;
                                captured_at?: undefined;
                                challenge?: undefined;
                                challenge_id?: undefined;
                                connection_id?: undefined;
                                key_id?: undefined;
                                latitude?: undefined;
                                longitude?: undefined;
                                oauth_grant_id?: undefined;
                                use_mode?: undefined;
                                request_mode?: undefined;
                                attestation?: undefined;
                                url?: undefined;
                                body?: undefined;
                                client_message_id?: undefined;
                                continuation?: undefined;
                                location?: undefined;
                                messages?: undefined;
                                acknowledge_data_effects?: undefined;
                                confirmation?: undefined;
                                reason?: undefined;
                                enabled?: undefined;
                            };
                            res: string;
                        };
                        args: {
                            header?: undefined;
                            params?: undefined;
                        };
                        select: {
                            exist?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: {
                                enabled: string;
                                installation_id: string;
                                accuracy_meters?: undefined;
                                agent_key_id?: undefined;
                                assertion?: undefined;
                                capture_source?: undefined;
                                captured_at?: undefined;
                                challenge?: undefined;
                                challenge_id?: undefined;
                                connection_id?: undefined;
                                key_id?: undefined;
                                latitude?: undefined;
                                longitude?: undefined;
                                oauth_grant_id?: undefined;
                                use_mode?: undefined;
                                request_mode?: undefined;
                                attestation?: undefined;
                                url?: undefined;
                                body?: undefined;
                                client_message_id?: undefined;
                                continuation?: undefined;
                                location?: undefined;
                                messages?: undefined;
                                acknowledge_data_effects?: undefined;
                                confirmation?: undefined;
                                reason?: undefined;
                                platform?: undefined;
                                push_token?: undefined;
                            };
                            res: string;
                        };
                        args: {
                            header?: undefined;
                            params?: undefined;
                        };
                        select: {
                            exist?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: {
                                installation_id: string;
                                accuracy_meters?: undefined;
                                agent_key_id?: undefined;
                                assertion?: undefined;
                                capture_source?: undefined;
                                captured_at?: undefined;
                                challenge?: undefined;
                                challenge_id?: undefined;
                                connection_id?: undefined;
                                key_id?: undefined;
                                latitude?: undefined;
                                longitude?: undefined;
                                oauth_grant_id?: undefined;
                                use_mode?: undefined;
                                request_mode?: undefined;
                                attestation?: undefined;
                                url?: undefined;
                                body?: undefined;
                                client_message_id?: undefined;
                                continuation?: undefined;
                                location?: undefined;
                                messages?: undefined;
                                acknowledge_data_effects?: undefined;
                                confirmation?: undefined;
                                reason?: undefined;
                                platform?: undefined;
                                push_token?: undefined;
                                enabled?: undefined;
                            };
                            res: string;
                        };
                        args: {
                            header?: undefined;
                            params?: undefined;
                        };
                        select: {
                            exist?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    })[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        customer_location_proof_revocation: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                format: string;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: {
                                accuracy_meters: string;
                                captured_at: string;
                                latitude: string;
                                longitude: string;
                            };
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        destination_address_suggestion: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short?: undefined;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: {
                                input: string;
                            };
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        destination_location_proof: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: {
                                address: string;
                                premise_proximity_confirmation_token: string;
                            };
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        domain_trust_card: {
            fields: {
                name: string;
                title: string;
                type: string;
                req: boolean;
            }[];
            name: string;
            op: {
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        geo_context: {
            fields: never[];
            name: string;
            op: {
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        health: {
            fields: {
                name: string;
                title: string;
                type: string;
                req: boolean;
            }[];
            name: string;
            op: {
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        job_application: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                op: {
                    create: {
                        type: string;
                    };
                };
            } | {
                name: string;
                title: string;
                type: string;
                req?: undefined;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                op?: undefined;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: ({
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                job_id: string;
                                application_id?: undefined;
                            };
                        };
                        transform: {
                            req: {
                                cover_note: string;
                                resume: string;
                                status?: undefined;
                                account_id?: undefined;
                                job_id?: undefined;
                                limit?: undefined;
                                offset?: undefined;
                            };
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            $action: string;
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                application_id: string;
                                job_id?: undefined;
                            };
                        };
                        transform: {
                            req: {
                                status: string;
                                cover_note?: undefined;
                                resume?: undefined;
                                account_id?: undefined;
                                job_id?: undefined;
                                limit?: undefined;
                                offset?: undefined;
                            };
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            $action: string;
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                application_id: string;
                                job_id?: undefined;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            $action: string;
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: {
                                account_id: string;
                                cover_note: string;
                                job_id: string;
                                resume: string;
                                status?: undefined;
                                limit?: undefined;
                                offset?: undefined;
                            };
                            res: string;
                        };
                        args: {
                            params?: undefined;
                        };
                        select: {
                            $action?: undefined;
                            exist?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: {
                                account_id: string;
                                limit: string;
                                offset: string;
                                status: string;
                                cover_note?: undefined;
                                resume?: undefined;
                                job_id?: undefined;
                            };
                            res: string;
                        };
                        args: {
                            params?: undefined;
                        };
                        select: {
                            $action?: undefined;
                            exist?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    })[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        job_resume_signed_url: {
            fields: {
                name: string;
                title: string;
                type: string;
                req: boolean;
            }[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                application_id: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        location_handoff: {
            fields: never[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        message: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                short?: undefined;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req?: undefined;
                short?: undefined;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                op: {
                    create: {
                        req: boolean;
                        type: string;
                    };
                };
                req?: undefined;
                short?: undefined;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: ({
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: {
                                message: string;
                                source_path: string;
                                subject: string;
                                target_business_id: string;
                                target_business_name: string;
                                target_business_source: string;
                                account_id?: undefined;
                                client_message_id?: undefined;
                            };
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: {
                                account_id: string;
                                client_message_id: string;
                                message: string;
                                subject: string;
                                target_business_id: string;
                                target_business_name: string;
                                target_business_source: string;
                                source_path?: undefined;
                            };
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    })[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        moderated_action: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                op?: undefined;
                short?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req?: undefined;
                op?: undefined;
                short?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                op: {
                    create: {
                        type: string;
                    };
                };
                short: string;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
                op?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                format: string;
                op?: undefined;
                short?: undefined;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: ({
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: {
                                continuation: string;
                                location: string;
                                messages: string;
                                content_type?: undefined;
                                file_sha256?: undefined;
                                intent_id?: undefined;
                                result?: undefined;
                                scan_authority_id?: undefined;
                                scanner?: undefined;
                                scanner_version?: undefined;
                                signature?: undefined;
                                size_bytes?: undefined;
                                question?: undefined;
                            };
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: {
                                content_type: string;
                                file_sha256: string;
                                intent_id: string;
                                result: string;
                                scan_authority_id: string;
                                scanner: string;
                                scanner_version: string;
                                signature: string;
                                size_bytes: string;
                                continuation?: undefined;
                                location?: undefined;
                                messages?: undefined;
                                question?: undefined;
                            };
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: {
                                question: string;
                                continuation?: undefined;
                                location?: undefined;
                                messages?: undefined;
                                content_type?: undefined;
                                file_sha256?: undefined;
                                intent_id?: undefined;
                                result?: undefined;
                                scan_authority_id?: undefined;
                                scanner?: undefined;
                                scanner_version?: undefined;
                                signature?: undefined;
                                size_bytes?: undefined;
                            };
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    })[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        open_api_document: {
            fields: {
                name: string;
                title: string;
                type: string;
                req: boolean;
            }[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        operation: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                op?: undefined;
                short?: undefined;
                writeOnly?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                op: {
                    create: {
                        type: string;
                        req?: undefined;
                    };
                    update?: undefined;
                    patch?: undefined;
                };
                short?: undefined;
                writeOnly?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req?: undefined;
                op?: undefined;
                short?: undefined;
                writeOnly?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
                op?: undefined;
                writeOnly?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                op: {
                    update: {
                        type: string;
                    };
                    create?: undefined;
                    patch?: undefined;
                };
                writeOnly: boolean;
                short?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: (string | string[])[];
                req?: undefined;
                op?: undefined;
                short?: undefined;
                writeOnly?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
                op?: undefined;
                writeOnly?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: (string | string[])[];
                req: boolean;
                op: {
                    create: {
                        type: string;
                        req?: undefined;
                    };
                    update?: undefined;
                    patch?: undefined;
                };
                short?: undefined;
                writeOnly?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: (string | string[])[];
                req: boolean;
                op?: undefined;
                short?: undefined;
                writeOnly?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                format: string;
                op?: undefined;
                short?: undefined;
                writeOnly?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                format: string;
                req?: undefined;
                op?: undefined;
                writeOnly?: undefined;
            } | {
                name: string;
                title: string;
                type: (string | string[])[];
                req: boolean;
                format: string;
                op?: undefined;
                short?: undefined;
                writeOnly?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                format: string;
                req?: undefined;
                op?: undefined;
                short?: undefined;
                writeOnly?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                op: {
                    patch: {
                        req: boolean;
                        type: string;
                    };
                    create?: undefined;
                    update?: undefined;
                };
                req?: undefined;
                short?: undefined;
                writeOnly?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                op: {
                    create: {
                        type: string;
                        req?: undefined;
                    };
                    patch: {
                        type: string;
                        req?: undefined;
                    };
                    update?: undefined;
                };
                short?: undefined;
                writeOnly?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                op: {
                    create: {
                        req: boolean;
                        type: string;
                    };
                    update?: undefined;
                    patch?: undefined;
                };
                req?: undefined;
                short?: undefined;
                writeOnly?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
                format: string;
                op?: undefined;
                writeOnly?: undefined;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: ({
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                application_id: string;
                                thread_id?: undefined;
                                fact_id?: undefined;
                                job_id?: undefined;
                                claim_id?: undefined;
                                request_id?: undefined;
                                campaign_id?: undefined;
                                report_id?: undefined;
                                submission_id?: undefined;
                                asset_id?: undefined;
                                flag_id?: undefined;
                                account_id?: undefined;
                                conversation_id?: undefined;
                                task_id?: undefined;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                thread_id: string;
                                application_id?: undefined;
                                fact_id?: undefined;
                                job_id?: undefined;
                                claim_id?: undefined;
                                request_id?: undefined;
                                campaign_id?: undefined;
                                report_id?: undefined;
                                submission_id?: undefined;
                                asset_id?: undefined;
                                flag_id?: undefined;
                                account_id?: undefined;
                                conversation_id?: undefined;
                                task_id?: undefined;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                fact_id: string;
                                application_id?: undefined;
                                thread_id?: undefined;
                                job_id?: undefined;
                                claim_id?: undefined;
                                request_id?: undefined;
                                campaign_id?: undefined;
                                report_id?: undefined;
                                submission_id?: undefined;
                                asset_id?: undefined;
                                flag_id?: undefined;
                                account_id?: undefined;
                                conversation_id?: undefined;
                                task_id?: undefined;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            header?: undefined;
                        };
                        select: {
                            exist: string[];
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            header?: undefined;
                        };
                        select: {
                            exist: string[];
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: {
                                url: string;
                                api_key?: undefined;
                                reason?: undefined;
                                value?: undefined;
                                active_or_good_standing?: undefined;
                                confirmation?: undefined;
                                credential_expires_at?: undefined;
                                holder_name_match?: undefined;
                                identifier_match?: undefined;
                                observed_at?: undefined;
                                outcome?: undefined;
                                owner_reason_code?: undefined;
                                source_authority?: undefined;
                                source_url?: undefined;
                                valid_until?: undefined;
                                verification_method?: undefined;
                                verified_service_scope?: undefined;
                                instruction?: undefined;
                                ai_draft_id?: undefined;
                                body?: undefined;
                                context_id?: undefined;
                                context_type?: undefined;
                                purpose_code?: undefined;
                                related_case_id?: undefined;
                                scope?: undefined;
                                provider?: undefined;
                                business_ids?: undefined;
                            };
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            header?: undefined;
                        };
                        select: {
                            exist: string[];
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                job_id: string;
                                application_id?: undefined;
                                thread_id?: undefined;
                                fact_id?: undefined;
                                claim_id?: undefined;
                                request_id?: undefined;
                                campaign_id?: undefined;
                                report_id?: undefined;
                                submission_id?: undefined;
                                asset_id?: undefined;
                                flag_id?: undefined;
                                account_id?: undefined;
                                conversation_id?: undefined;
                                task_id?: undefined;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            header?: undefined;
                        };
                        select: {
                            exist: string[];
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                claim_id: string;
                                application_id?: undefined;
                                thread_id?: undefined;
                                fact_id?: undefined;
                                job_id?: undefined;
                                request_id?: undefined;
                                campaign_id?: undefined;
                                report_id?: undefined;
                                submission_id?: undefined;
                                asset_id?: undefined;
                                flag_id?: undefined;
                                account_id?: undefined;
                                conversation_id?: undefined;
                                task_id?: undefined;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            header?: undefined;
                        };
                        select: {
                            exist: string[];
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            header?: undefined;
                        };
                        select: {
                            $action: string;
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                request_id: string;
                                application_id?: undefined;
                                thread_id?: undefined;
                                fact_id?: undefined;
                                job_id?: undefined;
                                claim_id?: undefined;
                                campaign_id?: undefined;
                                report_id?: undefined;
                                submission_id?: undefined;
                                asset_id?: undefined;
                                flag_id?: undefined;
                                account_id?: undefined;
                                conversation_id?: undefined;
                                task_id?: undefined;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            header?: undefined;
                        };
                        select: {
                            exist: string[];
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                campaign_id: string;
                                application_id?: undefined;
                                thread_id?: undefined;
                                fact_id?: undefined;
                                job_id?: undefined;
                                claim_id?: undefined;
                                request_id?: undefined;
                                report_id?: undefined;
                                submission_id?: undefined;
                                asset_id?: undefined;
                                flag_id?: undefined;
                                account_id?: undefined;
                                conversation_id?: undefined;
                                task_id?: undefined;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            header?: undefined;
                        };
                        select: {
                            exist: string[];
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: {
                                api_key: string;
                                url?: undefined;
                                reason?: undefined;
                                value?: undefined;
                                active_or_good_standing?: undefined;
                                confirmation?: undefined;
                                credential_expires_at?: undefined;
                                holder_name_match?: undefined;
                                identifier_match?: undefined;
                                observed_at?: undefined;
                                outcome?: undefined;
                                owner_reason_code?: undefined;
                                source_authority?: undefined;
                                source_url?: undefined;
                                valid_until?: undefined;
                                verification_method?: undefined;
                                verified_service_scope?: undefined;
                                instruction?: undefined;
                                ai_draft_id?: undefined;
                                body?: undefined;
                                context_id?: undefined;
                                context_type?: undefined;
                                purpose_code?: undefined;
                                related_case_id?: undefined;
                                scope?: undefined;
                                provider?: undefined;
                                business_ids?: undefined;
                            };
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            header?: undefined;
                        };
                        select: {
                            $action: string;
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: {
                                reason: string;
                                value: string;
                                url?: undefined;
                                api_key?: undefined;
                                active_or_good_standing?: undefined;
                                confirmation?: undefined;
                                credential_expires_at?: undefined;
                                holder_name_match?: undefined;
                                identifier_match?: undefined;
                                observed_at?: undefined;
                                outcome?: undefined;
                                owner_reason_code?: undefined;
                                source_authority?: undefined;
                                source_url?: undefined;
                                valid_until?: undefined;
                                verification_method?: undefined;
                                verified_service_scope?: undefined;
                                instruction?: undefined;
                                ai_draft_id?: undefined;
                                body?: undefined;
                                context_id?: undefined;
                                context_type?: undefined;
                                purpose_code?: undefined;
                                related_case_id?: undefined;
                                scope?: undefined;
                                provider?: undefined;
                                business_ids?: undefined;
                            };
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            header?: undefined;
                        };
                        select: {
                            exist: string[];
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                report_id: string;
                                application_id?: undefined;
                                thread_id?: undefined;
                                fact_id?: undefined;
                                job_id?: undefined;
                                claim_id?: undefined;
                                request_id?: undefined;
                                campaign_id?: undefined;
                                submission_id?: undefined;
                                asset_id?: undefined;
                                flag_id?: undefined;
                                account_id?: undefined;
                                conversation_id?: undefined;
                                task_id?: undefined;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            header?: undefined;
                        };
                        select: {
                            exist: string[];
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                submission_id: string;
                                application_id?: undefined;
                                thread_id?: undefined;
                                fact_id?: undefined;
                                job_id?: undefined;
                                claim_id?: undefined;
                                request_id?: undefined;
                                campaign_id?: undefined;
                                report_id?: undefined;
                                asset_id?: undefined;
                                flag_id?: undefined;
                                account_id?: undefined;
                                conversation_id?: undefined;
                                task_id?: undefined;
                            };
                        };
                        transform: {
                            req: {
                                active_or_good_standing: string;
                                confirmation: string;
                                credential_expires_at: string;
                                holder_name_match: string;
                                identifier_match: string;
                                observed_at: string;
                                outcome: string;
                                owner_reason_code: string;
                                reason: string;
                                source_authority: string;
                                source_url: string;
                                valid_until: string;
                                verification_method: string;
                                verified_service_scope: string;
                                url?: undefined;
                                api_key?: undefined;
                                value?: undefined;
                                instruction?: undefined;
                                ai_draft_id?: undefined;
                                body?: undefined;
                                context_id?: undefined;
                                context_type?: undefined;
                                purpose_code?: undefined;
                                related_case_id?: undefined;
                                scope?: undefined;
                                provider?: undefined;
                                business_ids?: undefined;
                            };
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            header?: undefined;
                        };
                        select: {
                            exist: string[];
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                asset_id: string;
                                application_id?: undefined;
                                thread_id?: undefined;
                                fact_id?: undefined;
                                job_id?: undefined;
                                claim_id?: undefined;
                                request_id?: undefined;
                                campaign_id?: undefined;
                                report_id?: undefined;
                                submission_id?: undefined;
                                flag_id?: undefined;
                                account_id?: undefined;
                                conversation_id?: undefined;
                                task_id?: undefined;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            header?: undefined;
                        };
                        select: {
                            exist: string[];
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                flag_id: string;
                                application_id?: undefined;
                                thread_id?: undefined;
                                fact_id?: undefined;
                                job_id?: undefined;
                                claim_id?: undefined;
                                request_id?: undefined;
                                campaign_id?: undefined;
                                report_id?: undefined;
                                submission_id?: undefined;
                                asset_id?: undefined;
                                account_id?: undefined;
                                conversation_id?: undefined;
                                task_id?: undefined;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            header?: undefined;
                        };
                        select: {
                            exist: string[];
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                account_id: string;
                                application_id?: undefined;
                                thread_id?: undefined;
                                fact_id?: undefined;
                                job_id?: undefined;
                                claim_id?: undefined;
                                request_id?: undefined;
                                campaign_id?: undefined;
                                report_id?: undefined;
                                submission_id?: undefined;
                                asset_id?: undefined;
                                flag_id?: undefined;
                                conversation_id?: undefined;
                                task_id?: undefined;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            header?: undefined;
                        };
                        select: {
                            exist: string[];
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                conversation_id: string;
                                application_id?: undefined;
                                thread_id?: undefined;
                                fact_id?: undefined;
                                job_id?: undefined;
                                claim_id?: undefined;
                                request_id?: undefined;
                                campaign_id?: undefined;
                                report_id?: undefined;
                                submission_id?: undefined;
                                asset_id?: undefined;
                                flag_id?: undefined;
                                account_id?: undefined;
                                task_id?: undefined;
                            };
                        };
                        transform: {
                            req: {
                                instruction: string;
                                url?: undefined;
                                api_key?: undefined;
                                reason?: undefined;
                                value?: undefined;
                                active_or_good_standing?: undefined;
                                confirmation?: undefined;
                                credential_expires_at?: undefined;
                                holder_name_match?: undefined;
                                identifier_match?: undefined;
                                observed_at?: undefined;
                                outcome?: undefined;
                                owner_reason_code?: undefined;
                                source_authority?: undefined;
                                source_url?: undefined;
                                valid_until?: undefined;
                                verification_method?: undefined;
                                verified_service_scope?: undefined;
                                ai_draft_id?: undefined;
                                body?: undefined;
                                context_id?: undefined;
                                context_type?: undefined;
                                purpose_code?: undefined;
                                related_case_id?: undefined;
                                scope?: undefined;
                                provider?: undefined;
                                business_ids?: undefined;
                            };
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            header?: undefined;
                        };
                        select: {
                            exist: string[];
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                conversation_id: string;
                                application_id?: undefined;
                                thread_id?: undefined;
                                fact_id?: undefined;
                                job_id?: undefined;
                                claim_id?: undefined;
                                request_id?: undefined;
                                campaign_id?: undefined;
                                report_id?: undefined;
                                submission_id?: undefined;
                                asset_id?: undefined;
                                flag_id?: undefined;
                                account_id?: undefined;
                                task_id?: undefined;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            header?: undefined;
                        };
                        select: {
                            exist: string[];
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                conversation_id: string;
                                application_id?: undefined;
                                thread_id?: undefined;
                                fact_id?: undefined;
                                job_id?: undefined;
                                claim_id?: undefined;
                                request_id?: undefined;
                                campaign_id?: undefined;
                                report_id?: undefined;
                                submission_id?: undefined;
                                asset_id?: undefined;
                                flag_id?: undefined;
                                account_id?: undefined;
                                task_id?: undefined;
                            };
                        };
                        transform: {
                            req: {
                                ai_draft_id: string;
                                body: string;
                                url?: undefined;
                                api_key?: undefined;
                                reason?: undefined;
                                value?: undefined;
                                active_or_good_standing?: undefined;
                                confirmation?: undefined;
                                credential_expires_at?: undefined;
                                holder_name_match?: undefined;
                                identifier_match?: undefined;
                                observed_at?: undefined;
                                outcome?: undefined;
                                owner_reason_code?: undefined;
                                source_authority?: undefined;
                                source_url?: undefined;
                                valid_until?: undefined;
                                verification_method?: undefined;
                                verified_service_scope?: undefined;
                                instruction?: undefined;
                                context_id?: undefined;
                                context_type?: undefined;
                                purpose_code?: undefined;
                                related_case_id?: undefined;
                                scope?: undefined;
                                provider?: undefined;
                                business_ids?: undefined;
                            };
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            header?: undefined;
                        };
                        select: {
                            exist: string[];
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                task_id: string;
                                application_id?: undefined;
                                thread_id?: undefined;
                                fact_id?: undefined;
                                job_id?: undefined;
                                claim_id?: undefined;
                                request_id?: undefined;
                                campaign_id?: undefined;
                                report_id?: undefined;
                                submission_id?: undefined;
                                asset_id?: undefined;
                                flag_id?: undefined;
                                account_id?: undefined;
                                conversation_id?: undefined;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                            header?: undefined;
                        };
                        select: {
                            exist: string[];
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: {
                                context_id: string;
                                context_type: string;
                                purpose_code: string;
                                related_case_id: string;
                                scope: string;
                                url?: undefined;
                                api_key?: undefined;
                                reason?: undefined;
                                value?: undefined;
                                active_or_good_standing?: undefined;
                                confirmation?: undefined;
                                credential_expires_at?: undefined;
                                holder_name_match?: undefined;
                                identifier_match?: undefined;
                                observed_at?: undefined;
                                outcome?: undefined;
                                owner_reason_code?: undefined;
                                source_authority?: undefined;
                                source_url?: undefined;
                                valid_until?: undefined;
                                verification_method?: undefined;
                                verified_service_scope?: undefined;
                                instruction?: undefined;
                                ai_draft_id?: undefined;
                                body?: undefined;
                                provider?: undefined;
                                business_ids?: undefined;
                            };
                            res: string;
                        };
                        args: {
                            header?: undefined;
                            params?: undefined;
                        };
                        select: {
                            exist?: undefined;
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            header?: undefined;
                            params?: undefined;
                        };
                        select: {
                            exist?: undefined;
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: {
                                api_key: string;
                                provider: string;
                                url?: undefined;
                                reason?: undefined;
                                value?: undefined;
                                active_or_good_standing?: undefined;
                                confirmation?: undefined;
                                credential_expires_at?: undefined;
                                holder_name_match?: undefined;
                                identifier_match?: undefined;
                                observed_at?: undefined;
                                outcome?: undefined;
                                owner_reason_code?: undefined;
                                source_authority?: undefined;
                                source_url?: undefined;
                                valid_until?: undefined;
                                verification_method?: undefined;
                                verified_service_scope?: undefined;
                                instruction?: undefined;
                                ai_draft_id?: undefined;
                                body?: undefined;
                                context_id?: undefined;
                                context_type?: undefined;
                                purpose_code?: undefined;
                                related_case_id?: undefined;
                                scope?: undefined;
                                business_ids?: undefined;
                            };
                            res: string;
                        };
                        args: {
                            header?: undefined;
                            params?: undefined;
                        };
                        select: {
                            exist?: undefined;
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: {
                                provider: string;
                                url?: undefined;
                                api_key?: undefined;
                                reason?: undefined;
                                value?: undefined;
                                active_or_good_standing?: undefined;
                                confirmation?: undefined;
                                credential_expires_at?: undefined;
                                holder_name_match?: undefined;
                                identifier_match?: undefined;
                                observed_at?: undefined;
                                outcome?: undefined;
                                owner_reason_code?: undefined;
                                source_authority?: undefined;
                                source_url?: undefined;
                                valid_until?: undefined;
                                verification_method?: undefined;
                                verified_service_scope?: undefined;
                                instruction?: undefined;
                                ai_draft_id?: undefined;
                                body?: undefined;
                                context_id?: undefined;
                                context_type?: undefined;
                                purpose_code?: undefined;
                                related_case_id?: undefined;
                                scope?: undefined;
                                business_ids?: undefined;
                            };
                            res: string;
                        };
                        args: {
                            header?: undefined;
                            params?: undefined;
                        };
                        select: {
                            exist?: undefined;
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: {
                                business_ids: string;
                                url?: undefined;
                                api_key?: undefined;
                                reason?: undefined;
                                value?: undefined;
                                active_or_good_standing?: undefined;
                                confirmation?: undefined;
                                credential_expires_at?: undefined;
                                holder_name_match?: undefined;
                                identifier_match?: undefined;
                                observed_at?: undefined;
                                outcome?: undefined;
                                owner_reason_code?: undefined;
                                source_authority?: undefined;
                                source_url?: undefined;
                                valid_until?: undefined;
                                verification_method?: undefined;
                                verified_service_scope?: undefined;
                                instruction?: undefined;
                                ai_draft_id?: undefined;
                                body?: undefined;
                                context_id?: undefined;
                                context_type?: undefined;
                                purpose_code?: undefined;
                                related_case_id?: undefined;
                                scope?: undefined;
                                provider?: undefined;
                            };
                            res: string;
                        };
                        args: {
                            header?: undefined;
                            params?: undefined;
                        };
                        select: {
                            exist?: undefined;
                            $action?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    })[];
                };
                patch: {
                    input: string;
                    name: string;
                    points: ({
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                business_id: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    })[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: ({
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                conversation_id: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    })[];
                };
                update: {
                    input: string;
                    name: string;
                    points: ({
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: {
                                api_key: string;
                                base_url: string;
                                custom_wire: string;
                                make_active: string;
                                model: string;
                                connection_id?: undefined;
                                enabled?: undefined;
                                model_id?: undefined;
                            };
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: {
                                connection_id: string;
                                enabled: string;
                                model_id: string;
                                api_key?: undefined;
                                base_url?: undefined;
                                custom_wire?: undefined;
                                make_active?: undefined;
                                model?: undefined;
                            };
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params?: undefined;
                        };
                        select: {
                            exist?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    })[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        owner_notification: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
            } | {
                name: string;
                title: string;
                type: (string | string[])[];
                req: boolean;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        owner_notification_setting: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
            } | {
                name: string;
                title: string;
                type: string;
                req?: undefined;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: {
                                business_id: string;
                                email_enabled: string;
                                event_types: string;
                                webhook_enabled: string;
                            };
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        owner_webhook_endpoint: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
            } | {
                name: string;
                title: string;
                type: (string | string[])[];
                req: boolean;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                endpoint_id: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        owner_webhook_registration: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: ({
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                endpoint_id: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {
                            param?: undefined;
                        };
                        transform: {
                            req: {
                                business_id: string;
                                event_types: string;
                                url: string;
                            };
                            res: string;
                        };
                        args: {
                            params?: undefined;
                        };
                        select: {
                            exist?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    })[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        pricing: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                format: string;
            } | {
                name: string;
                title: string;
                type: (string | string[])[];
                req: boolean;
                format?: undefined;
            })[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        promote_verified_transaction: {
            fields: {
                name: string;
                title: string;
                type: string;
                req: boolean;
            }[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: {
                                business_id: string;
                                evidence_id: string;
                            };
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        public_content: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                format: string;
            })[];
            name: string;
            op: {
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        recommend: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                format: string;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: (string | string[])[];
                req: boolean;
                short?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req?: undefined;
                short?: undefined;
                format?: undefined;
            })[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            query: ({
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example?: undefined;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: number;
                            })[];
                        };
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        review: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: ({
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: {
                                attestation_accepted: string;
                                customer_confirmed: string;
                                message: string;
                                rating: string;
                                service_date: string;
                                subject: string;
                                target_business_id: string;
                                account_id?: undefined;
                            };
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: {
                                account_id: string;
                                attestation_accepted: string;
                                customer_confirmed: string;
                                message: string;
                                rating: string;
                                service_date: string;
                                subject: string;
                                target_business_id: string;
                            };
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    })[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        revoke: {
            fields: {
                name: string;
                title: string;
                type: string;
                req: boolean;
            }[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                key_id: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        save_business: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
            } | {
                name: string;
                title: string;
                type: string;
                req?: undefined;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: {
                                account_id: string;
                                business_id: string;
                                business_name: string;
                                business_source: string;
                                category: string;
                                city: string;
                                notes: string;
                                state: string;
                            };
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        saved_business: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
            } | {
                name: string;
                title: string;
                type: string;
                req?: undefined;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: {
                                account_id: string;
                                limit: string;
                            };
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        saved_location: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                short?: undefined;
                op?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
                op?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: (string | string[])[];
                req: boolean;
                op: {
                    update: {
                        type: string;
                    };
                };
                short?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                format: string;
                req?: undefined;
                short?: undefined;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: (string | string[])[];
                req: boolean;
                short?: undefined;
                op?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: (string | string[])[];
                req: boolean;
                format: string;
                short?: undefined;
                op?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req?: undefined;
                short?: undefined;
                op?: undefined;
                format?: undefined;
            })[];
            name: string;
            op: {
                remove: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: {
                                label: string;
                                location_proof_id: string;
                                zip: string;
                            };
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        search: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                short: string;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                short: string;
                req?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                format: string;
                short?: undefined;
            } | {
                name: string;
                title: string;
                type: (string | string[])[];
                req: boolean;
                short?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                short?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req?: undefined;
                short?: undefined;
                format?: undefined;
            })[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: ({
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            query: ({
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd?: undefined;
                                example?: undefined;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            })[];
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    } | {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            query: ({
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example?: undefined;
                                field?: undefined;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: boolean;
                                field?: undefined;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                example: number;
                                field?: undefined;
                            } | {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                field: boolean;
                                example?: undefined;
                            })[];
                        };
                        select: {
                            exist?: undefined;
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    })[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        suggest: {
            fields: {
                name: string;
                title: string;
                type: string;
                req: boolean;
            }[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            query: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                        };
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        support_internal_note: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
            } | {
                name: string;
                title: string;
                type: (string | string[])[];
                req: boolean;
            })[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                conversation_id: string;
                            };
                        };
                        transform: {
                            req: {
                                body: string;
                            };
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        support_workflow: {
            fields: {
                name: string;
                title: string;
                type: string;
            }[];
            id: {
                field: string;
                name: string;
            };
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                conversation_id: string;
                            };
                        };
                        transform: {
                            req: {
                                category: string;
                                priority: string;
                                waiting_on: string;
                            };
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        taxonomy_suggestion: {
            fields: {
                name: string;
                title: string;
                type: string;
                req: boolean;
            }[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            query: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                            }[];
                        };
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        trust_card: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: string;
                req: boolean;
                format: string;
            } | {
                name: string;
                title: string;
                type: string;
                req?: undefined;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: (string | string[])[];
                req: boolean;
                format?: undefined;
            } | {
                name: string;
                title: string;
                type: (string | string[])[];
                req: boolean;
                format: string;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {
                            param: {
                                fact_id: string;
                            };
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
                list: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: ({
                            lit: string;
                            var?: undefined;
                        } | {
                            var: string;
                            lit?: undefined;
                        })[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                        args: {
                            params: {
                                name: string;
                                orig: string;
                                type: string;
                                kind: string;
                                reqd: boolean;
                                example: string;
                            }[];
                        };
                        select: {
                            exist: string[];
                        };
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        unsave_business: {
            fields: {
                name: string;
                title: string;
                type: string;
                req: boolean;
            }[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: {
                                account_id: string;
                                business_id: string;
                            };
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        update_agent_billing_account: {
            fields: ({
                name: string;
                title: string;
                type: string;
                req: boolean;
            } | {
                name: string;
                title: string;
                type: string;
                req?: undefined;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: {
                                account_id: string;
                                billing_status: string;
                                included_actions: string;
                                monthly_fee_cents: string;
                                overage_cents: string;
                                plan: string;
                            };
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        withdraw_job_application: {
            fields: {
                name: string;
                title: string;
                type: string;
                req: boolean;
            }[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        kind: string;
                        method: string;
                        orig: string;
                        segments: {
                            lit: string;
                        }[];
                        parts: string[];
                        rename: {};
                        transform: {
                            req: {
                                account_id: string;
                                application_id: string;
                            };
                            res: string;
                        };
                        args: {};
                        select: {};
                        response: {
                            kind: string;
                            media: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
    };
}
declare const config: Config;
export { config, FEATURE_PLUGINS, };
