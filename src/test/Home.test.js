import React from 'react';
import { mount } from 'enzyme';
import { ApolloProvider} from 'react-apollo-hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import createClient from './mockClient';
import gql from 'graphql-tag';
import Home from '../views/Home';
import { act } from 'react-dom/test-utils';
import PostPreview from '../components/PostPreview';

const ALL_POST = gql`
    query ALLPOST {
        listPosts{
            _id,
            title
        }
    }
`

const ALL_POST_MOCK = [
    {
        request: {
            query: ALL_POST
        },
        result:{
            data: {
                listPosts:[
                    {_id:"727282828282882822", title:"Post 1"},
                    {_id:"73738383993938387383", title:"Post 2"},
                    {_id:"995945883989383839939", title:"Post 3"}
                ]
            }
        }
    }
]

const waitRequest = () => new  Promise( resolve => setTimeout(resolve));

describe("<Home />", () => {
    
    it("Render Works", () => {
        
        const client = createClient(ALL_POST_MOCK);
        const component = mount(
            <ApolloProvider client={client}>
                <Router>
                    <Home />
                </Router>
            </ApolloProvider>
        );

        expect(component).toMatchSnapshot();
    })

    it("Render Posts Works", () => {

        act( () => {

            const testRequest = async() => {
                const client = createClient(ALL_POST_MOCK);
                await waitRequest();
                const component = mount(
                    <ApolloProvider client={client}>
                        <Router>
                            <Home />
                        </Router>
                    </ApolloProvider>
                );
        
                 //expect(component.find(".post-title")).toHaveLength(3)
        
                // expect(component.find('h4').text()).toBe("Loading...")

                expect(component.find(PostPreview)).toHaveLength(3)
            }
           
            testRequest();
        });
       
    })


})