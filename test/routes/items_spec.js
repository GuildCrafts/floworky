const expect = require( 'chai' ).expect
const sinon = require( 'sinon' )
const express = require( 'express' )
const ITEMS_FIXTURE_DATA = require( './fixture_data.js' )

const REQUEST_DATA = {
  app: {
    get: data => ({ Item: {
      create: () => new Promise( (resolve, reject) => resolve( ITEMS_FIXTURE_DATA ) ),
      findAll: () => new Promise( (resolve, reject) => resolve( ITEMS_FIXTURE_DATA ) )
    } })
  },
  body: {
    title: 'title',
    description: 'description',
    parent_id: 1
  },
  user: { id: 1, query: 'query' }
}

describe( 'items routes', () => {
  let sandbox
  let router

  beforeEach( () => {
    sandbox = sinon.sandbox.create()
    sandbox.stub( express, 'Router' ).returns({
      get: sandbox.spy(),
      post: sandbox.spy(),
      delete: sandbox.spy()
    })

    router = require( '../../routes/items' )
  })

  it( 'registers URI / for GET', () => {
    expect( router.get.calledWith( '/', sandbox.match.any )).to.be.true
  })

  describe( 'GET /starred URI', () => {
    it( 'is registered', () => {
      expect( router.get.calledWith( '/starred', sandbox.match.any )).to.be.true
    })

    it( 'returns json', done => {
      const callback = router.get.secondCall.args[ 1 ]

      const response = {
        json: data => {
          expect( data ).to.eql({ data: ITEMS_FIXTURE_DATA })
          done()
        }
      }

      callback( REQUEST_DATA, response )
    })
  })

  describe( 'POST / URI', () => {
    it( 'is registered', () => {
      expect( router.post.calledWith( '/', sandbox.match.any )).to.be.true
    })

    it( 'responds with a redirect to /items', done => {
      const callback = router.post.firstCall.args[ 1 ]
      const stubbedResponse = ( expected, done ) => {
        return {
          redirect: url => {
            expect( url ).to.be.eql( expected )
            done()
          }
        }
      }

      const response = stubbedResponse( '/items', done )

      callback( REQUEST_DATA, response )
    })
  })

  afterEach( () => sandbox.restore())
})
