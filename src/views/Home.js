import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import PostPreview from '../components/PostPreview';
import Footer from '../components/Footer';

const ALL_POST = gql`
    query ALLPOST {
        listPosts{
            _id,
            title
        }
    }
`
function Home(){

    const {data, loading, error} =  useQuery(ALL_POST);
    if(error){
        return <h4>Internal Server Error</h4>
    }else{
        return(
            <>
                <Navbar/>
                <Header/>
                <main className="container">
                    <section className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                        {
                                loading ? <h4>Loading ...</h4> 
                                    : data.listPosts.map( post => (
                                    <PostPreview _id={post._id} title={post.title} />
                                ))
                            }
                        </div>
                    </section>
                </main>
                <Footer/>
                { /*Frangment */}
            </>
        )
    }
}

export default Home;