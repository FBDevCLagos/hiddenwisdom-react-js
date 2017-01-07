import expect from 'expect';
import mockProverbsApi, { proverbWithTranslation } from './mockProverbsApi';
import { proverbs } from './data/proverbs';
import { translations } from './data/translations';

describe('mockProverbApi()', () => {
  it('should return an array of proverbs on getAllProverbs()', () => {
    mockProverbsApi.getAllProverbs()
    .then(res => {
      expect(res).toEqual(proverbs);
    });
  });

  it('should return a proverb on getProverb()', () => {
    const proverbId = "1";
    mockProverbsApi.getProverb(proverbId)
    .then(res => {
      expect(res).toEqual(proverbs[1]);
    });
  });

  it('should return proverbs with new proverb on saveProverb()', () => {
    const proverb = { body: 'new proverb', language: 'en' }

    expect(proverbs.length).toEqual(8);

    mockProverbsApi.saveProverb(proverb)
    .then(res => {
      expect(proverbs.length).toEqual(9);
    });
  });       
});
