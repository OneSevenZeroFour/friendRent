/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 50714
 Source Host           : localhost:3306
 Source Schema         : you

 Target Server Type    : MySQL
 Target Server Version : 50714
 File Encoding         : 65001

 Date: 27/10/2017 09:03:34
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT COMMENT 'id',
  `tel` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL COMMENT '手机号码',
  `password` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL COMMENT '密码',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 18 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (00000000001, '13112341234', '123');
INSERT INTO `user` VALUES (00000000002, '13212341234', '123123');
INSERT INTO `user` VALUES (00000000003, '13412341234', '123123');
INSERT INTO `user` VALUES (00000000004, '13412341234', '123123');
INSERT INTO `user` VALUES (00000000005, '13412341234', '123123');
INSERT INTO `user` VALUES (00000000006, '13412341234', '123123');
INSERT INTO `user` VALUES (00000000007, '13412341234', '123123');
INSERT INTO `user` VALUES (00000000008, '13333333333', '111111');
INSERT INTO `user` VALUES (00000000009, '13131313131', '123');
INSERT INTO `user` VALUES (00000000010, '11111111111', '123123');
INSERT INTO `user` VALUES (00000000011, '13441411231', '123123');
INSERT INTO `user` VALUES (00000000012, '12313451345', '12341234');
INSERT INTO `user` VALUES (00000000013, '13451133113', '123123');
INSERT INTO `user` VALUES (00000000014, '13333333111', '123123');
INSERT INTO `user` VALUES (00000000015, '12212212212', '123123');
INSERT INTO `user` VALUES (00000000016, '13444444444', '123');
INSERT INTO `user` VALUES (00000000017, '13313311123', '111111');

SET FOREIGN_KEY_CHECKS = 1;
