const expect = require( 'chai' ).expect
const sinon = require( 'sinon' )
const express = require( 'express' )
const { ITEMS_FIXTURE_DATA, REQUEST_DATA } = require( '../../fixture_data' )

describe( 'API items routes', () => {
  let sandbox
  let router

  beforeEach( () => {
    sandbox = sinon.sandbox.create()
    sandbox.stub( express, 'Router' ).returns({
      get: sandbox.spy(),
      post: sandbox.spy(),
      delete: sandbox.spy()
    })

    router = require( '../../../../routes/api/v1/items' )
  })

  describe( 'GET api/v1/items/ URI', () => {
    it( 'is registered', () => {
      expect( router.get.calledWith( '/', sandbox.match.any )).to.be.true
    })

    it( 'returns json with items and tree', done => {
      const callback = router.get.firstCall.args[ 1 ]

      const response = {
        json: data => {
          expect( data ).to.have.property( 'data' )
          expect( data.data ).to.have.property( 'items' )
          expect( data.data ).to.have.property( 'tree' )
          expect( data.data.items ).to.eql( ITEMS_FIXTURE_DATA )
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

    it( 'responds with a json status of 200', done => {
      const callback = router.post.firstCall.args[ 1 ]
      const stubbedResponse = ( expected, done ) => {
        return {
          status: code => {
            expect( code ).to.be.eql( expected )
            done()
          }
        }
      }

      const response = stubbedResponse( 200, done )

      callback( REQUEST_DATA, response )
    })
  })

  afterEach( () => sandbox.restore())
})
