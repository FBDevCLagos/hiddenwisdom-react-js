import expect from 'expect';
import mockProverbsApi, {proverbWithTranslation} from './mockProverbsApi';
import {proverbs} from './data/proverbs';
import {translations} from './data/translations';

describe('mockProverbApi()', () => {
  it('returns an array of proverbs on getAllProverbs()', () => {
    mockProverbsApi.getAllProverbs()
    .then(res => {
      expect(res).toEqual(proverbs);
    });
  });
});

describe('proverbWithTranslation()', () => {
  it('returns an proverb with translation', () => {
    let proverb = proverbs[0];
    let result = proverbWithTranslation(proverb.id);
    let proverbTranslations = translations
      .filter(translation => translation.proverb_id === proverb.id);
    expect(result.translations).toEqual(proverbTranslations);
  });
});
