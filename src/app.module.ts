import { BookmarkModule } from './bookmark/bookmark.module';
import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [BookmarkModule, UserModule, AuthModule],
})
export class AppModule {}
