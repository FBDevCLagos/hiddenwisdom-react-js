import expect from 'expect';
import {getLanguage} from './translationLanguages';

describe('getLanguage()', () => {
  it('retrieve the exact langauge with the key', () => {
    const yb = getLanguage('yb')
    const ig = getLanguage('ig')
    const hs = getLanguage('hs')

    expect(yb).toBe('Yoruba')
    expect(ig).toBe('Igbo')
    expect(hs).toBe('Hausa');
  });
});
