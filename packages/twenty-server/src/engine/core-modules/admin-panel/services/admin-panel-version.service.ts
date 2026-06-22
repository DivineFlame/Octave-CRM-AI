import { Injectable } from '@nestjs/common';

import semver from 'semver';
import * as z from 'zod';

import { type VersionInfoDTO } from 'src/engine/core-modules/admin-panel/dtos/version-info.dto';
import { SecureHttpClientService } from 'src/engine/core-modules/secure-http-client/secure-http-client.service';
import { TwentyConfigService } from 'src/engine/core-modules/twenty-config/twenty-config.service';

@Injectable()
export class AdminPanelVersionService {
  constructor(
    private readonly twentyConfigService: TwentyConfigService,
    private readonly secureHttpClientService: SecureHttpClientService,
  ) {}

  async getVersionInfo(): Promise<VersionInfoDTO> {
    const currentVersion = this.twentyConfigService.get('APP_VERSION');

    try {
      const httpClient = this.secureHttpClientService.getHttpClient();

      const rawResponse = await httpClient.get<unknown>(
        'https://api.github.com/repos/DivineFlame/Octave-CRM-AI/releases?per_page=100',
      );
      const response = z
        .object({ data: z.array(z.object({ tag_name: z.string() })) })
        .parse(rawResponse);

      const versions = response.data
        .map((release) => release.tag_name)
        .filter((name) => name !== 'latest' && semver.valid(name));

      if (versions.length === 0) {
        return { currentVersion, latestVersion: 'latest' };
      }

      versions.sort((a, b) => semver.compare(b, a));
      const latestVersion = versions[0];

      return { currentVersion, latestVersion };
    } catch {
      return { currentVersion, latestVersion: 'latest' };
    }
  }
}
