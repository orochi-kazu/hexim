import { keys } from '$lib/core/settings.svelte'
import { afterEach, describe, expect, test, vi } from 'vitest'
import { load, save } from './local.svelte'

describe('local storage', () => {
  afterEach(vi.resetAllMocks)

  describe('save', () => {
    describe('stringifies values in a wrapper object', () => {
      test.for(
        [
          { input: 'String Value', output: '{"value":"String Value"}' },
          { input: 987, output: '{"value":987}' },
          { input: 123.45, output: '{"value":123.45}' },
          { input: true, output: '{"value":true}' },
          { input: false, output: '{"value":false}' },
          { input: [1, 2, '3'], output: '{"value":[1,2,"3"]}' },
          { input: null, output: '{"value":null}' },
          { input: { lol: 'face' }, output: '{"value":{"lol":"face"}}' },
        ].map((it) => ({ type: typeof it.input, ...it })),
      )('$input ($type)', ({ type, input, output }) => {
        // given
        const spy = vi.spyOn(window.localStorage, 'setItem')

        // when
        save(keys.theme.selected, input)

        // then
        expect(spy).toHaveBeenCalledWith('settings/theme/selected', output)
      })
    })

    describe('maps keys', () => {
      test.for([
        { input: keys.theme.selected, output: 'settings/theme/selected' },
        { input: keys.locale.override, output: 'settings/locale/override' },
        { input: 'unknown', output: undefined }, // TODO: don't persist invalid keys
      ])('$input -> $output', ({ input, output }) => {
        // given
        const spy = vi.spyOn(window.localStorage, 'setItem')

        // when
        save(input, 777)

        // then
        expect(spy).toHaveBeenCalledWith(output, '{"value":777}')
      })
    })
  })

  describe('load', () => {
    describe('parses stringified values out of wrapper object', () => {
      test.for(
        [
          { json: '{"value":"Strang volue"}', expected: 'Strang volue' },
          { json: '{"value":678}', expected: 678 },
          { json: '{"value":345.67}', expected: 345.67 },
          { json: '{"value":true}', expected: true },
          { json: '{"value":false}', expected: false },
          { json: '{"value":["4",5,6]}', expected: ['4', 5, 6] },
          { json: '{"value":null}', expected: null },
          { json: '{"value":{"fish":"hats"}}', expected: { fish: 'hats' } },
        ].map((it) => ({ type: typeof it.expected, ...it })),
      )('$json ($type)', ({ json, expected }) => {
        // given
        const spy = vi.spyOn(window.localStorage, 'getItem')
        spy.mockReturnValueOnce(json)

        // when
        const actual = load(keys.theme.selected)

        // then
        expect(actual).toEqual(expected)
        expect(spy).toHaveBeenCalledWith('settings/theme/selected')
      })
    })

    describe('maps keys', () => {
      test.for([
        { input: keys.theme.selected, output: 'settings/theme/selected' },
        { input: keys.locale.override, output: 'settings/locale/override' },
        { input: 'unknown', output: undefined }, // TODO: don't persist invalid keys
      ])('$input -> $output', ({ input, output }) => {
        // given
        const spy = vi.spyOn(window.localStorage, 'getItem')

        // when
        load(input)

        // then
        expect(spy).toHaveBeenCalledWith(output)
      })
    })
  })
})
