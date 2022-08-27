const express = require('express');
const cors = require('cors');
const index = require('./');

jest.mock('express')
jest.mock('cors')

const mockExpressApp = jest.fn()
const mockUse = jest.fn()

describe('index', () => {
    beforeEach(() => {
        jest.resetAllMocks()
        mockExpressApp.mockImplementation({
            use: mockUse
        })
        express.mockReturnValue(mockExpressApp)
    })

    it('app use is called on start', () => {
        expect(mockUse).toHaveBeenCalled()
    })

})