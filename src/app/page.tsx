"use client";
import React, { createContext } from "react";
import Image from "next/image";
import { useEffect } from "react";
// import * as THREE from 'three';
import Navbar from "../../components/navbar";
// import { fadeIn } from "../variants";
import { fadeIn } from "../variants";

import { motion } from "framer-motion";
import Link from "next/link";
import ThreeCanvasComponent from "../../components/three";
export default function Home() {
  return (
   <>
   <ThreeCanvasComponent/>
   </>
  );
}
