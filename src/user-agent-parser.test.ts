import { getBrowserFrom, getDeviceFrom, getPlatformFrom } from './user-agent-parser';

test('It should get Windows platform', () => {
  // Given
  const userAgent = 'Chrome 75.0.3770 / Windows 10.0.0';

  // When
  const result = getPlatformFrom(userAgent);

  // Then
  expect(result.name).toBe('windows');
});

test('It should get Windows platform on Browserstack', () => {
  // Given
  const userAgent =
    'Chrome 75.0.3770 / Windows 10.0.0 (https://automate.browserstack.com/builds/1f90795f6e1078f0dca1b94929a8d372c60970d5/sessions/98a8e7718381c14a5c6c64afe26babb7063cf7d3)';

  // When
  const result = getPlatformFrom(userAgent);

  // Then
  expect(result.name).toBe('windows');
  expect(result.version).toBe('10.0.0');
});

test('It should get Linux platform', () => {
  // Given
  const userAgent = 'Chrome 75.0.3770 / Linux 0.0';

  // When
  const result = getPlatformFrom(userAgent);

  // Then
  expect(result.name).toBe('linux');
  expect(result.version).toBe('0.0');
});

test('It should get Android platform', () => {
  // Given
  const userAgent = 'Chrome 75.0.3770 / Android 5.0';

  // When
  const result = getPlatformFrom(userAgent);

  // Then
  expect(result.name).toBe('android');
  expect(result.version).toBe('5.0');
});

test('It should get IOS platform', () => {
  // Given
  const userAgent = 'Chrome 75.0.3770 / iOS 11.2.1';

  // When
  const result = getPlatformFrom(userAgent);

  // Then
  expect(result.name).toBe('ios');
  expect(result.version).toBe('11.2.1');
});

test('It should get destop (windows) device', () => {
  // Given
  const userAgent = 'Chrome 75.0.3770 / Windows 10.0.0';

  // When
  const result = getDeviceFrom(userAgent);

  // Then
  expect(result).toBe('Windows');
});

test('It should get destop (linux) device', () => {
  // Given
  const userAgent = 'Chrome 75.0.3770 / Linux 0.0';

  // When
  const result = getDeviceFrom(userAgent);

  // Then
  expect(result).toBe('Linux');
});

test('It should get mobile (android) device', () => {
  // Given
  const userAgent = 'Chrome 75.0.3770 / Android 5.0';

  // When
  const result = getDeviceFrom(userAgent);

  // Then
  expect(result).toBe('Android');
});

test('It should get mobile (ios) device', () => {
  // Given
  const userAgent = 'Chrome 75.0.3770 / iOS 11.2.1';

  // When
  const result = getDeviceFrom(userAgent);

  // Then
  expect(result).toBe('iOS');
});

test('It should get unknown browser', () => {
  // Given
  const userAgent = 'unknown 2.0 / Android 5.0';

  // When
  const result = getBrowserFrom(userAgent);

  // Then
  expect(result.name).toBe('unknown');
  expect(result.version).toBe('2.0');
});
