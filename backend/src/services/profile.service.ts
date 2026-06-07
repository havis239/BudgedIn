import { profileRepository, type ProfileInput, type ProfileUpdateInput } from '../repositories/profile.repository.js';

export const profileService = {
  get: profileRepository.get,
  upsert: profileRepository.upsert,
  update: profileRepository.update
};

export type { ProfileInput, ProfileUpdateInput };

