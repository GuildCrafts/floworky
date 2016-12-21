const expect = require( 'chai' ).expect
const sinon = require( 'sinon' )
const express = require( 'express' )

const stubbedResponse = ( expected, done ) => {
  return {
    render: data => {
      expect( data ).to.be.eql( expected )
      done()
    }
  }
}

describe( 'index routes', () => {
  let sandbox
  let router

  beforeEach( () => {
    sandbox = sinon.sandbox.create()
    sandbox.stub( express, 'Router' ).returns({
      get: sandbox.spy(),
      post: sandbox.spy(),
      delete: sandbox.spy()
    })

    router = require( '../../routes/index' )
  })

  it( 'registers URI / for GET', () => {
    expect( router.get.calledWith( '/', sandbox.match.any )).to.be.true
  })

  it( 'renders the index view', done => {
    const callback = router.get.firstCall.args[ 1 ]

    const request = {}
    const response = stubbedResponse( 'index', done )

    callback( request, response )
  })

  afterEach( () => sandbox.restore())
})
