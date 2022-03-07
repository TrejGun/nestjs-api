import { Test, TestingModule } from "@nestjs/testing";
import { ConfigModule } from "@nestjs/config";

import { UserService } from "./user.service";

describe("UserService", () => {
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          envFilePath: `.env`,
        }),
      ],
      providers: [UserService],
    }).compile();

    userService = module.get<UserService>(UserService);
  });

  it("should be defined", () => {
    expect(userService).toBeDefined();
  });

  describe("getList", () => {
    it("should return a list", done => {
      const list = userService.getList();
      expect(list.length).toEqual(3);
      done();
    });
  });
});
